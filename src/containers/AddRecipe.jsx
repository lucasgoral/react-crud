import React, { useRef } from "react";
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



const AddRecipe = ({ addItem }) => {
  const titleInput = useRef();
  const ingredientsInput = useRef();
  
const onAddClick =  () => {

  const title = titleInput.current.value.trim();
  const ingredients = strToArray(ingredientsInput.current.value)
  if(title.length > 0 && ingredients.length > 0) {
    console.log(ingredients.length)
    console.log(ingredients);
  addItem(title, ingredients);
  }
}

  return (
    <div>
      Add recipe
      <form>
        <h2>Add a Recipe</h2>
        <div>
          <h3>Recipe</h3>
          <input type="text" ref={titleInput} />
        </div>
        <div>
          <h3>Ingredients</h3>
          <textarea ref={ingredientsInput} />
        </div>
        <button className="bt bt-good"
          type="button"
          onClick={onAddClick}
        >
          Add item
        </button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
