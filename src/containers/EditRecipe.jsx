import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { EDIT_ITEM } from "../actions/Actions";
import { strToArray } from "../utils";

const mapStateToProps = state => {
  const { recipesList } = state;
  return { recipesList };
};

const mapDispatchToProps = dispatch => {
  return {
    editItem: (title, ingredients, key) => {
      console.log(ingredients);
      dispatch({
        type: EDIT_ITEM,
        title,
        ingredients: strToArray(ingredients),
        key
      });
    }
  };
};

const EditRecipe = ({ itemId, editItem, recipesList, close }) => {
  const itemToEdit = recipesList.find(item => item.key === itemId);

  const initialState = {
    title: itemToEdit.title,
    ingredients: itemToEdit.ingredients.toString(),
    key: itemToEdit.key
  };

  const [state, setState] = useState(initialState);
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    editItem(state.title, state.ingredients, state.key);
    close();
  };
  return (
    <div>
      Add recipe
      <p>{itemId}</p>
      <form onSubmit={handleSubmit}>
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
          Edit item
        </button>
        <button className="bt" type="submit" onClick={close}>
          Close
        </button>
      </form>
    </div>
  );
};

EditRecipe.propTypes = {
  itemId: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe);
