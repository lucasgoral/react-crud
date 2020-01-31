import React, { useRef } from "react";
import PropTypes from "prop-types";
import { v1 } from "uuid";
import { connect } from "react-redux";
import { ADD_ITEM, EDIT_ITEM } from "../actions/Actions";
const mapStateToProps = state => {
  console.log(state);
  const { recipesList } = state;
  return { recipesList };
};

const strToArray = str => {
  const newArray = str.split(",");
  newArray.map(item => item.trim());
  return newArray;
};
const mapDispatchToProps = dispatch => {
  return {
    addItem: (title, ingredients) =>
      dispatch({
        type: ADD_ITEM,
        title,
        ingredients: strToArray(ingredients),
        key: v1()
      }),
    editItem: (title, ingredients, key) =>
      dispatch({
        type: EDIT_ITEM,
        title,
        ingredients: strToArray(ingredients),
        key
      })
  };
};

const AddEditRecipe = ({ mode, itemId, addItem, editItem, recipesList }) => {
  const titleInput = useRef();
  const ingredientsInput = useRef();
  const getTitle = () => {
    const title = recipesList.find(item => item.key === itemId);
    console.log(title);
    return title ? title.title : "";
  };

  return (
    <div>
      Add recipe
      <p>{itemId}</p>
      <form>
        <h2>Add a Recipe</h2>
        <div>
          <h3>Recipe</h3>
          <input type="text" ref={titleInput}></input>
        </div>
        <div>
          <h3>Ingredients</h3>
          <textarea ref={ingredientsInput}></textarea>
        </div>
        {mode === "edit" ? (
          <button
            type="button"
            onClick={() => {
              editItem(
                titleInput.current.value,
                ingredientsInput.current.value,
                itemId
              );
            }}
          >
            Edit item
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              console.log(titleInput);
              addItem(titleInput.current.value, ingredientsInput.current.value);
            }}
          >
            Add item
          </button>
        )}
      </form>
    </div>
  );
};

AddEditRecipe.propTypes = {
  mode: PropTypes.string.isRequired,
  itemId: PropTypes.string
};

AddEditRecipe.defaultProps = {
  itemId: ""
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditRecipe);
