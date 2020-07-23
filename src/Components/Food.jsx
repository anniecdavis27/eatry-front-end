import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../App";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import apiUrl from "../apiConfig";
import Layout from "./Layout";
import "./Food.css";
import PieChart from "./PieChart";

const Work = (props) => {
  const [food, setFood] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const [user, setUser] = useState({});

  const username = useContext(DataContext);

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
        const response = await axios(`${apiUrl}/user/${username.username}`);
        setUser(response.data[0]);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, [username.username]);

  if (!user) {
    return <h2>...loading</h2>;
  }

  const addToLogged = (food) => {
    axios({
      url: `${apiUrl}/user/add/${food._id}/${user._id}/`,
      method: "PUT",
      data: { food },
    });
  };

  const removeFromLogged = (food) => {
    axios({
      url: `${apiUrl}/user/${user._id}/removeone/${food._id}/`,
      method: "PUT",
      data: { foods: [] },
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
  const link = food.Link;

  if (username.username.length > 1) {
    return (
      <>
        <Layout>
          <h2 className='foodItem'>{name}</h2>
          <div className='foodsContainer'>
          <PieChart totalFat={fat} totalCarbs={carbs} totalProtein={protein} />

          <div className='foodStats'>
          <h3 className='stats'>Calories: {calories}</h3>
          <h3 className='stats'>Carbs: {carbs}g</h3>
          <h3 className='stats'>Protein: {protein}g</h3>
          <h3 className='stats'>Fat: {fat}g</h3>
          <h3 className='stats'>Sodium: {sodium}mg</h3>
          <h3 className='stats'>Cholesterol: {cholesterol}mg</h3>
          <h3 className='stats'>Potassium: {potassium}mg</h3>
               {food.Link ? (
            <a href={link}>
              <h3>See Recipe...</h3>
            </a>
          ) : null}
          </div>
          </div>
          <Link to='/foods'><button onClick={() => addToLogged(food)} className='crudButton'>
          Add to Log
          </button></Link><br />
          <Link to='/foods'><button onClick={() => removeFromLogged(food)} className='crudButton'>
          Remove from Log
          </button></Link>

          <br />
          <Link to={`/foods/${props.match.params.id}/edit`}>
            <button className="crudButton">Edit Food</button>
          </Link>
          <br />
          <button onClick={() => deleteItem(food)} className="crudButton">
            Delete Food
          </button>
          <br />
          <Link to="/foods">
            <button className="crudButton">Back to All Foods</button>
          </Link>
        </Layout>
      </>
    );
  } else {
    return (
      <>

      <h1 className='signIn'>You must sign in.</h1>
      <Link to='/sign-in'><h2 className='signInLink'>sign in</h2></Link>

      </>
    );
  }
};

export default Work;
