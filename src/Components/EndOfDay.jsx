import React from "react";
import { Link } from "react-router-dom";
import Layout from './Layout'

function Welcome() {
  return (
    <div className="end-of-day">
        <Layout>
        <h1>Congratulations, you completed your log for the day.</h1>
        </Layout>
    </div>
  );
}

export default Welcome;
