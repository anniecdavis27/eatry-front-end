import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";
import apiUrl from "../apiConfig";

function MealLog() {
  const [logged, setLogged] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`${apiUrl}/foods/logged`);
        setLogged(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const loggedFoodsArr = logged.map((item) => (
    <li key={item._id}>
      <Link to={`/foods/${item._id}`}>
        <h2>{item.name}</h2>
      </Link>
    </li>
  ));

  const endDayRevert = () => {
    logged.map(item => (
      axios({
        url: `${apiUrl}/foods/${item._id}`,
        method: "PUT",
        data: { isLogged: false },
      })
    ))
    
    window.location.reload();
    }


  return (
    <div className="meal-log">
      <Layout>
        <h2>Today: </h2>
        <ul>{loggedFoodsArr}</ul>
        <Link><button onClick={endDayRevert}>End Day</button></Link>
      </Layout>
    </div>
  );
}

export default MealLog;
