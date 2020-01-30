import React from "react";
import PropTypes from "prop-types";
import { v1 } from "uuid";

const RecipeItem = ({ title, ingredients, remove, edit }) => {
  return (
    <div>
      <h2>{title}</h2>
      {ingredients.map(item => (
        <li key={v1()}>{item}</li>
      ))}
      <button type="button" onClick={edit}>
        Edit
      </button>
      <button type="button" onClick={remove}>
        Remove
      </button>
    </div>
  );
};

RecipeItem.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  remove: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired
};

export default RecipeItem;
