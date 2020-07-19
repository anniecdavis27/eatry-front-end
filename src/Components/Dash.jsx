import React from "react";
import Layout from "./Layout";

function Dash() {
  return (
    <div className="App">
      <Layout>
        <h2>Welcome, USER.</h2>
        <h3>Your nutritional Breakdown so far:</h3>
        <h3>Carbs: </h3>
        <h3>Protein: </h3>
        <h3>Fat: </h3>
        <h3>Total Calories:</h3>
      </Layout>
    </div>
  );
}

export default Dash;
