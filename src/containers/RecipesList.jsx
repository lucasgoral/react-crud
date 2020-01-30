import React from "react";
import { connect } from "react-redux";
import RecipeItem from "../components/RecipeItem";
import { REMOVE_ITEM } from "../actions/Actions";

const mapStateToProps = state => {
  console.log(state);
  const { recipesList } = state;
  return { recipesList };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: key => dispatch({ type: REMOVE_ITEM, key })
  };
};
const RecipesList = ({ recipesList, removeItem }) => {
  // eslint-disable-next-line no-console
  console.log(recipesList);
  // eslint-disable-next-line no-console

  return (
    <div>
      <h1>Recipes list here</h1>
      {recipesList.map(item => (
        <RecipeItem
          key={item.key}
          title={item.title}
          ingredients={item.ingredients}
          remove={() => {
            removeItem(item.key);
          }}
          edit={() => {
            alert("edit");
          }}
        />
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
