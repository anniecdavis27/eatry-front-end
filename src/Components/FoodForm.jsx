import React from "react";
import { Link } from "react-router-dom";
import './FoodForm.css'

function FoodForm({ item, handleSubmit, handleChange, cancelPath }) {
  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          placeholder="add food name"
          type="text"
          value={item.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <label>Calories: </label>
        <input
          placeholder="add calories"
          type="text"
          value={item.calories}
          name="calories"
          onChange={handleChange}
        />
        <br />
        <label>Carbs: </label>
        <input
          placeholder="add carbs"
          type="text"
          value={item.carbs}
          name="carbs"
          onChange={handleChange}
        />
        <br />
        <label>Protein: </label>
        <input
          placeholder="add protein"
          type="text"
          value={item.protein}
          name="protein"
          onChange={handleChange}
        />
        <br />
        <label>Fat: </label>
        <input
          placeholder="add fat"
          type="text"
          value={item.totalFat}
          name="totalFat"
          onChange={handleChange}
        />
        <br />
        <label>Sodium: </label>
        <input
          placeholder="add sodium"
          type="text"
          value={item.sodium}
          name="sodium"
          onChange={handleChange}
        />
        <br />
        <label>Cholesterol: </label>
        <input
          placeholder="add cholesterol"
          type="text"
          value={item.cholesterol}
          name="cholesterol"
          onChange={handleChange}
        />
        <br />
        <label>Potassium: </label>
        <input
          placeholder="add potassium"
          type="text"
          value={item.potassium}
          name="potassium"
          onChange={handleChange}
        />
        <br />
        <br />
        <br />
        <button className='submit' type="submit">Submit</button>
        <Link to={cancelPath}>
          <button className='cancel'>Cancel</button>
        </Link>
      </form>
    </div>
  );
}

export default FoodForm;
