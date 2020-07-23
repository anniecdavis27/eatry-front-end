import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodForm from "./FoodForm";
import apiUrl from "../apiConfig";
import { Redirect } from "react-router-dom";
import Layout from "./Layout";

const FoodCreate = (props) => {
  console.log("ItemCreate props", props);
  const [item, setItem] = useState({
    name: "",
    calories: "",
    carbs: "",
    protein: "",
    totalFat: "",
    sodium: "",
    cholesterol: "",
    potassium: "",
    Link: ''
  });
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(
          `${apiUrl}/foods/${props.match.params.id}`
        );
        setItem({
          item: response.data.item,
        });
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, [props.match.params.id]);

  const handleChange = (event) => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      url: `${apiUrl}/foods/${props.match.params.id}`,
      method: "PUT",
      data: item,
    })
      .then(() => setIsUpdated(true))
      .catch(console.error);
  };

  if (isUpdated) {
    return <Redirect to={`/foods/${props.match.params.id}`} />;
  }
  return (
    <Layout>
      <FoodForm
        item={item}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/foods/${props.match.params.id}`}
      />
    </Layout>
  );
};

export default FoodCreate;
