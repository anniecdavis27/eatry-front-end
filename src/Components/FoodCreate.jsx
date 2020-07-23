import React, { useState } from "react";
import axios from "axios";
import FoodForm from "./FoodForm";
import Layout from "./Layout";
import apiUrl from "../apiConfig";
import "./FoodCreate.css";

const FoodCreate = (props) => {
  console.log("ItemCreate props", props);
  const [input, setInput] = useState({
    name: "",
    calories: "",
    carbs: "",
    protein: "",
    totalFat: "",
    sodium: "",
    cholesterol: "",
    potassium: "",
    Link: "",
  });
  const [item, setItem] = useState(null);

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    console.log("handleSubmit");
    axios({
      url: `${apiUrl}/foods`,
      method: "POST",
      data: input,
    })
      .then((res) => {
        setItem({ createdItem: res.data.item });
        props.history.push("/foods");
      })
      .catch(console.error);
  };

  console.log(item);

  return (
    <Layout>
      <FoodForm
        item={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/foods"
      />
    </Layout>
  );
};

export default FoodCreate;
