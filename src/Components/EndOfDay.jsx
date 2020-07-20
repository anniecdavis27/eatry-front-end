import React from "react";
import { Link } from "react-router-dom";
import Layout from './Layout'

function Welcome() {
  return (
    <div className="end-of-day">
        <Layout>
        <h1>Congratulations, you completed your log for the day.</h1>
        <Link to={'/dash/'}><button>Return to Dashboard</button></Link>
        </Layout>
    </div>
  );
}

export default Welcome;
