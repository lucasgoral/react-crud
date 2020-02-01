import React, { useState } from "react";
import { v1 } from "uuid";
import { connect } from "react-redux";
import { ADD_ITEM } from "../actions/Actions";
import { strToArray } from "../utils";

const mapStateToProps = state => {
  const { recipesList } = state;
  return { recipesList };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: (title, ingredients) =>
      dispatch({
        type: ADD_ITEM,
        title,
        ingredients: ingredients,
        key: v1()
      })
  };
};

const AddRecipe = ({ addItem, close }) => {
  const initialState = {
    title: "",
    ingredients: ""
  };
  const [state, setState] = useState(initialState);
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const title = state.title.trim();
    const ingredients = strToArray(state.ingredients);
    if (title.length > 0 && ingredients.length > 0) {
      addItem(title, ingredients);
      close();
    }
  };

  return (
    <div>
      Add recipe
      <form>
        <h2>Add a Recipe</h2>
        <div>
          <h3>Recipe</h3>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={state.title}
          />
        </div>
        <div>
          <h3>Ingredients</h3>
          <textarea
            name="ingredients"
            onChange={handleChange}
            value={state.ingredients}
          />
        </div>
        <button className="bt bt-good" type="submit" onClick={handleSubmit}>
          Add item
        </button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
