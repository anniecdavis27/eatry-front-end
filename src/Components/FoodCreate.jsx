import React, { useState } from "react";
import axios from "axios";
import FoodForm from "./FoodForm";
import Layout from "./Layout";
import apiUrl from "../apiConfig";
import './FoodCreate.css'

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
  });
  const [item, setItem] = useState(null);

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  console.log(input);

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
        //   isUpdated(true)
        props.history.push("/foods");
      })
      .catch(console.error);
  };

  console.log(item);
  //   console.log(updated)

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
