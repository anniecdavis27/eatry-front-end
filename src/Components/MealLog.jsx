import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../App";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import axios from "axios";
import apiUrl from "../apiConfig";
import Modal from "./Modal/Modal";
import "./Modal/Modal.css";
import "./MealLog.css";

function MealLog() {
  const [logged, setLogged] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userID, setUserID] = useState("");

  const username = useContext(DataContext);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`${apiUrl}/user/${username.username}`);
        setLogged(response.data[0].foods);
        setUserID(response.data[0]._id);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, [username.username]);

  const loggedFoodsArr = logged.map((item) => (
    <li key={item._id}>
      <Link to={`/foods/${item._id}`}>
        <h2>{item.name}</h2>
      </Link>
    </li>
  ));

  const toggleModal = (e) => {
    setShowModal(!showModal);
  };

  const endDayRevert = () => {
    axios({
      url: `${apiUrl}/user/${userID}/remove`,
      method: "PUT",
      data: { foods: [] },
    });
  };

  if (username.username.length > 1) {
    return (
      <div className="meal-log">
        <Layout>

          <h2 className='today'>Today: </h2>
          <div className='logContainer'>
          <ul className='foodArray'>{loggedFoodsArr}</ul>
          </div>
          <button onClick={toggleModal} className='endDay'>End Day</button>

        {showModal ? (<Modal>
            <h1 className='yousure'>Are you sure you would like end your day?</h1>
                <div className="buttons">
                <Link to={'/close-day'}><button onClick={endDayRevert} className='yes'>Yes</button></Link>
                <button onClick={toggleModal} className='no'>No</button>
                </div>
           </Modal>) : null}

        </Layout>
      </div>
    );
  } else {
    return (
      <>
        <h1 className='signIn'>You must sign in.</h1>
        <Link to="/sign-in">
          <h2 className='signInLink'>sign in</h2>
        </Link>
      </>
    );
  }
}

export default MealLog;
