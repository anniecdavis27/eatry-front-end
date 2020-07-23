import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";
import axios from "axios";
import apiUrl from "../apiConfig";
import Layout from "./Layout";
import PieChart from "./PieChart";
import './Dash.css'

function Dash() {
  const [logged, setLogged] = useState([]);

  const username = useContext(DataContext);

  console.log(username.username.length);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`${apiUrl}/user/${username.username}`);
        setLogged(response.data[0].foods);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, [username.username]);
 
  const mapCals = logged.map((item) => {
    return item.calories;
  });

  const totCals = mapCals.reduce((a, b) => a + b, 0);

  const mapPro = logged.map((item) => {
    return item.protein;
  });

  const totPro = mapPro.reduce((a, b) => a + b, 0);

  const mapCarb = logged.map((item) => {
    return item.carbs;
  });

  const totCarb = mapCarb.reduce((a, b) => a + b, 0);

  const mapFat = logged.map((item) => {
    return item.totalFat;
  });

  const totFat = mapFat.reduce((a, b) => a + b, 0);

  const mapSod = logged.map((item) => {
    return item.sodium;
  });

  const totSod = mapSod.reduce((a, b) => a + b, 0);

  const mapChol = logged.map((item) => {
    return item.cholesterol;
  });

  const totChol = mapChol.reduce((a, b) => a + b, 0);

  const mapPot = logged.map((item) => {
    return item.potassium;
  });

  const totPot = mapPot.reduce((a, b) => a + b, 0);


  if (username.username.length > 1) {
    return (
      <div className="App">
        <Layout>
          <h2 className='welcomeUser'>Welcome, USER.</h2>
          <h3 className='nutritionalBreakdown'>Your nutritional Breakdown so far:</h3>
          
          <div className='dashContainer'>
          {totCals > 0 ? (
            <PieChart
              totalFat={totFat}
              totalCarbs={totCarb}
              totalProtein={totPro}
            />
          ) : null}
          <div className='dashcontainer2'>
          <h3 className='totCals'>Total Calories: {totCals}</h3>
          <h3 className='breakdowns'>Carbs: {totCarb}g</h3>
          <h3 className='breakdowns'>Protein: {totPro}g</h3>
          <h3 className='breakdowns'>Fat: {totFat}g</h3>
          <h3 className='breakdowns'>Sodium: {totSod}mg</h3>
          <h3 className='breakdowns'>Cholesterol: {totChol}mg</h3>
          <h3 className='breakdowns'>Potassium: {totPot}mg</h3>
          </div>
          </div>
        </Layout>
      </div>
    );
  } else {
    return (
      <>
      <h1 className='signIn'>You must sign in.</h1>
      <Link to='/sign-in'><h2 className='signInLink'>sign in</h2></Link>
      </>
    )
  }

}

export default Dash;
