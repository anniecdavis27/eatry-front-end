import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../App";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import apiUrl from "../apiConfig";
import Layout from "./Layout";
import './Food.css'
import PieChart from "./PieChart";

const Work = (props) => {
  const [food, setFood] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const [user, setUser] = useState({})

  const username = useContext(DataContext);

  console.log(username.username.length);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(
          `${apiUrl}/foods/${props.match.params.id}`
        );
        setFood(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, [props.match.params.id]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(
          `${apiUrl}/user/${username.username}`
        );
        setUser(response.data[0]);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, [username.username]);

  console.log(user)
if (!user) {
  return <h2>...loading</h2>
}
  console.log(user._id)

  const addToLogged = (food) => {
    axios({
          url: `${apiUrl}/user/add/${food._id}/${user._id}/`,
          method: "PUT",
          data: { food }
        });
  };

  const removeFromLogged = (food) => {
    axios({
          url: `${apiUrl}/user/${user._id}/removeone/${food._id}/`,
          method: "PUT",
          data: { foods: [] }
        });
  };

  const deleteItem = async (food) => {
    await axios({
      url: `${apiUrl}/foods/name/${food.name}`,
      method: "DELETE",
    });
    setIsDeleted(true);
  };

  if (isDeleted) {
    return (
      <Redirect
        to={{ pathname: "/foods", state: { msg: "Item succesfully deleted!" } }}
      />
    );
  }

  if (!food) {
    return <p>...loading</p>;
  }

  const name = food.name;
  const calories = food.calories;
  const carbs = food.carbs;
  const protein = food.protein;
  const fat = food.totalFat;
  const cholesterol = food.cholesterol;
  const potassium = food.potassium;
  const sodium = food.sodium;

  if (username.username.length > 1) {
    return (
      <>
        <Layout>
          <h2>{name}</h2>
          <PieChart totalFat={fat} totalCarbs={carbs} totalProtein={protein} />
          <h3>Calories: {calories}</h3>
          <h3>Carbs: {carbs}g</h3>
          <h3>Protein: {protein}g</h3>
          <h3>Fat: {fat}g</h3>
          <h3>Sodium: {sodium}mg</h3>
          <h3>Cholesterol: {cholesterol}mg</h3>
          <h3>Potassium: {potassium}mg</h3>
          <Link to='/foods'><button onClick={() => addToLogged(food)} className='crudButton'>
          Add to Log
          </button></Link>
          <Link to='/foods'><button onClick={() => removeFromLogged(food)} className='crudButton'>

          Remove from Log
          </button></Link>
          <br />
          <Link to={`/foods/${props.match.params.id}/edit`}>
            <button className='crudButton'>Edit Food</button>
          </Link>
          <br />
          <button onClick={() => deleteItem(food)} className='crudButton'>Delete Food</button>
          <br />
          <Link to="/foods">
            <button className='crudButton'>Back to All Foods</button>
          </Link>
        </Layout>
      </>
    );
  } else {
    return (
      <>
      <h1>You must sign in.</h1>
      <Link to='/sign-in'><h2>sign in</h2></Link>
      </>
    )
  }
};

export default Work;
