import React, { useState, useEffect, useContext } from "react";
import Layout from "./Layout";
import axios from "axios";
import apiUrl from "../apiConfig";
import { Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import "./Foods.css";
import { DataContext } from "../App";

function Foods(props) {
  const username = useContext(DataContext);

  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  let searchFoods = foods.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  let searchFoodsArr = searchFoods.map((item) => (
    <li key={item._id}>
      <Link to={`/foods/${item._id}`}>
        <h2>{item.name}</h2>
      </Link>
    </li>
  ));

  if (username.username.length > 1) {
    return (
      <div className="meal-log">
        <Layout>
        <h2 className="allFoods">All Foods:</h2>
          <SearchParams searchTerm={searchTerm} handleChange={handleChange} />
          <Link to={"/create-food"}>
            <button className="addFood">Add Food</button>
          </Link>
          <div className="foodsContainer">
            
            <ul className="ulFood">{searchFoodsArr}</ul>
          </div>
        </Layout>
      </div>
    );
  } else {
    return (
      <>
        <h1 className="signIn">You must sign in.</h1>
        <Link to="/sign-in">
          <h2 className="signInLink">sign in</h2>
        </Link>
      </>
    );
  }
}

export default Foods;
