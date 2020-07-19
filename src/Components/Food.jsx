import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../apiConfig'
import Layout from './Layout'

const Work = (props) =>  {
    console.log('Food', props)
  const [food, setFood] = useState(null) 

  useEffect(() => {
    const makeAPICall = async () => {
      try {
          const response = await axios(`${apiUrl}/foods/${props.match.params.id}`)
          console.log('Item - response', response)
          setFood(response.data)
        } catch (err) {
          console.error(err)
        }
  
   }
    makeAPICall()
  }, [props.match.params.id])

  console.log(food)

  const toggleLogged = (food) => {
    if (food.isLogged === false){
    axios({
        url: `${apiUrl}/foods/${food._id}/`,
        method: "PUT",
        data: { isLogged: true },
      }) 
    } else if (food.isLogged === true) {
    axios({
        url: `${apiUrl}/foods/${food._id}/`,
        method: "PUT",
        data: { isLogged: false },
      }) 
      }
     window.location.reload()
}

  if (!food) {
      return <p>...loading</p>
  }
  console.log(food.isLogged)

  const name = food.name
  const calories = food.calories
  const carbs = food.carbs
  const protein = food.protein
  const fat = food.totalFat
  const cholesterol = food.cholesterol
  const potassium = food.potassium
  const sodium = food.sodium

  

    return (
        <>
        <Layout>
            <h2>{name}</h2>
            <h3>Calories: {calories}g</h3>
            <h3>Carbs: {carbs}g</h3>
            <h3>Protein: {protein}g</h3>
            <h3>Fat: {fat}g</h3>
            <h3>Sodium: {sodium}mg</h3>
            <h3>Cholesterol: {cholesterol}mg</h3>
            <h3>Potassium: {potassium}mg</h3>
            <button onClick={() => toggleLogged(food)}>{!food.isLogged ? "Log" : "Remove"}</button>
            <br />
            <Link to='/foods'><button>Back to All Foods</button></Link>
        </Layout>
        </>
    )
}

export default Work