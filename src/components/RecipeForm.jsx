import React from "react";
import PropTypes from "prop-types";

const RecipeForm = ({
  handleSubmit,
  handleChange,
  ingredients,
  title,
  edit,
  close
}) => {
  return (
    <div>
      <form action="post">
        <h2>{edit ? "Edit the recipe" : "Add a recipe"}</h2>
        <div>
          <h3>Recipe</h3>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </div>
        <div>
          <h3>Ingredients</h3>
          <textarea
            name="ingredients"
            onChange={handleChange}
            value={ingredients}
          />
        </div>
        <button className="bt bt-good" type="submit" onClick={handleSubmit}>
          {edit ? "Edit Item" : "Add item"}
        </button>
        <button type="button" className="bt" onClick={close}>
          Close
        </button>
      </form>
    </div>
  );
};

RecipeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  ingredients: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  edit: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default RecipeForm;
