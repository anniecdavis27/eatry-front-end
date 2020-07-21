import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";
import apiUrl from "../apiConfig";
import Modal from './Modal/Modal';
import './Modal/Modal.css'

function MealLog() {
  const [logged, setLogged] = useState([]);
  const [showModal, setShowModal] = useState(false)

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

  const toggleModal = (e) => {
    setShowModal(!showModal)
  }

  const endDayRevert = () => {
    logged.map(item => (
      axios({
        url: `${apiUrl}/foods/${item._id}`,
        method: "PUT",
        data: { isLogged: false },
      })
    ))
    }


  return (
    <div className="meal-log">
      <Layout>
        <h2>Today: </h2>
        <ul>{loggedFoodsArr}</ul>
        <Link><button onClick={toggleModal}>End Day</button></Link>
        {showModal ? (<Modal>
            <h1>Are you sure you would like end your day?</h1>
                <div className="buttons">
                <Link to={'/close-day'}><button onClick={endDayRevert}>Yes</button></Link>
                <button onClick={toggleModal}>No</button>
                </div>
           </Modal>) : null}
      </Layout>
    </div>
  );
}

export default MealLog;
