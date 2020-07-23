import React from "react";
import { Link } from "react-router-dom";
import './FoodForm.css'

function FoodForm({ item, handleSubmit, handleChange, cancelPath }) {
  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <label className='createLabel'>Name: </label>
        <input
          placeholder="add food name"
          type="text"
          value={item.name}
          name="name"
          onChange={handleChange}
          required
        />
        <br />
        <label className='createLabel'>Calories: </label>
        <input
          placeholder="add calories"
          type="text"
          value={item.calories}
          name="calories"
          onChange={handleChange}
          required
        />
        <br />
        <label className='createLabel'>Carbs: </label>
        <input
          placeholder="add carbs"
          type="text"
          value={item.carbs}
          name="carbs"
          onChange={handleChange}
          required
        />
        <br />
        <label className='createLabel'>Protein: </label>
        <input
          placeholder="add protein"
          type="text"
          value={item.protein}
          name="protein"
          onChange={handleChange}
          required
        />
        <br />
        <label className='createLabel'>Fat: </label>
        <input
          placeholder="add fat"
          type="text"
          value={item.totalFat}
          name="totalFat"
          onChange={handleChange}
          required
        />
        <br />
        <label className='createLabel'>Sodium: </label>
        <input
          placeholder="add sodium"
          type="text"
          value={item.sodium}
          name="sodium"
          onChange={handleChange}
          required
        />
        <br />
        <label className='createLabel'>Cholesterol: </label>
        <input
          placeholder="add cholesterol"
          type="text"
          value={item.cholesterol}
          name="cholesterol"
          onChange={handleChange}
          required
        />
        <br />
        <label className='createLabel'>Potassium: </label>
        <input
          placeholder="add potassium"
          type="text"
          value={item.potassium}
          name="potassium"
          onChange={handleChange}
          required
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
