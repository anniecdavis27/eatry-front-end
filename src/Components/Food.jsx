import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import apiUrl from "../apiConfig";
import Layout from "./Layout";
import './Food.css'

const Work = (props) => {
  console.log("Food", props);
  const [food, setFood] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(
          `${apiUrl}/foods/${props.match.params.id}`
        );
        console.log("Item - response", response);
        setFood(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, [props.match.params.id]);

  const toggleLogged = (food) => {
    if (food.isLogged === false) {
      axios({
        url: `${apiUrl}/foods/${food._id}/`,
        method: "PUT",
        data: { isLogged: true },
      });
    } else if (food.isLogged === true) {
      axios({
        url: `${apiUrl}/foods/${food._id}/`,
        method: "PUT",
        data: { isLogged: false },
      });
    }
    window.location.reload();
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

  return (
    <>
      <Layout>
        <h2 className='foodNameh2'>{name}</h2>
        <h3 className='data'>Calories: {calories}</h3>
        <h3 className='data'>Carbs: {carbs}g</h3>
        <h3 className='data'>Protein: {protein}g</h3>
        <h3 className='data'>Fat: {fat}g</h3>
        <h3 className='data'>Sodium: {sodium}mg</h3>
        <h3 className='data'>Cholesterol: {cholesterol}mg</h3>
        <h3 className='data'>Potassium: {potassium}mg</h3>
        <button onClick={() => toggleLogged(food)} className='crudButton'>
          {!food.isLogged ? "Add to Log" : "Remove from log"}
        </button>
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
};

export default Work;
