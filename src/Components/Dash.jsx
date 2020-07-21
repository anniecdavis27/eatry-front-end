import React, { useState, useEffect } from "react";
import axios from 'axios'
import apiUrl from '../apiConfig'
import Layout from "./Layout";
import './Dash.css'

function Dash() {

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

  console.log(logged)

  const mapCals = logged.map(item => {
    return item.calories
  })

  const totCals = mapCals.reduce((a, b) => a + b, 0)

  const mapPro = logged.map(item => {
    return item.protein
  })

  const totPro = mapPro.reduce((a, b) => a + b, 0)

  const mapCarb = logged.map(item => {
    return item.carbs
  })

  const totCarb = mapCarb.reduce((a, b) => a + b, 0)

  const mapFat = logged.map(item => {
    return item.totalFat
  })

  const totFat = mapFat.reduce((a, b) => a + b, 0)

  const mapSod = logged.map(item => {
    return item.sodium
  })

  const totSod = mapSod.reduce((a, b) => a + b, 0)

  const mapChol = logged.map(item => {
    return item.cholesterol
  })

  const totChol = mapChol.reduce((a, b) => a + b, 0)

  const mapPot = logged.map(item => {
    return item.potassium
  })

  const totPot = mapPot.reduce((a, b) => a + b, 0)

  return (
    <div className="App">
      <Layout>
        <h2 className='welcomeUser'>Welcome, USER.</h2>
        <h3 className='nutritionalBreakdown'>Your nutritional Breakdown so far:</h3>
        <h3 className='data'>Total Calories: {totCals}</h3>
        <h3 className='data'>Carbs: {totCarb}g</h3>
        <h3 className='data'>Protein: {totPro}g</h3>
        <h3 className='data'>Fat: {totFat}g</h3>
        <h3 className='data'>Sodium: {totSod}mg</h3>
        <h3 className='data'>Cholesterol: {totChol}mg</h3>
        <h3 className='data'>Potassium: {totPot}mg</h3>
      </Layout>
    </div>
  );
}

export default Dash;
