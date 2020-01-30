import React from "react";
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

export default RecipeItem;
