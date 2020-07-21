import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import axios from "axios";
import apiUrl from "../apiConfig";
import { Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import './Foods.css'

function Foods(props) {
  console.log("Foods", props);
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
    console.log(foods);
    setSearchTerm(event.target.value);
  };

  console.log(searchTerm);
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

  return (
    <div className="meal-log">
      <Layout>
        <SearchParams searchTerm={searchTerm} handleChange={handleChange} />
        <h2>All Foods:</h2>
        <ul>{searchFoodsArr}</ul>
        <Link to={"/create-food"}>
          <button className='addFood'>Add Food</button>
        </Link>
      </Layout>
    </div>
  );
}

export default Foods;
