import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../App";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import apiUrl from "../apiConfig";
import Layout from "./Layout";
import PieChart from "./PieChart";

const Work = (props) => {
  const [food, setFood] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

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
          <button onClick={() => toggleLogged(food)}>
            {!food.isLogged ? "Add to Log" : "Remove from log"}
          </button>
          <br />
          <Link to={`/foods/${props.match.params.id}/edit`}>
            <button>Edit Food</button>
          </Link>
          <br />
          <button onClick={() => deleteItem(food)}>Delete Food</button>
          <br />
          <Link to="/foods">
            <button>Back to All Foods</button>
          </Link>
        </Layout>
      </>
    );
  } else {
    return <></>;
  }
};

export default Work;
