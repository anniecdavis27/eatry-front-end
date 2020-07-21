import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import axios from "axios";
import apiUrl from "../apiConfig";
import { Link } from "react-router-dom";
import './Foods.css'

function Foods(props) {
  console.log("Foods", props);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`${apiUrl}/foods`);
        setFoods(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const allFoodsArr = foods.map((item) => (
    <li key={item._id}>
      <Link to={`/foods/${item._id}`}>
        <h2>{item.name}</h2>
      </Link>
    </li>
  ));

  return (
    <div className="meal-log">
      <Layout>
        <h2 className='foods'>All Foods:</h2>
        <ul className='list'>{allFoodsArr}</ul>
        <Link to={"/create-food"}>
          <button>Add Food</button>
        </Link>
      </Layout>
    </div>
  );
}

export default Foods;
