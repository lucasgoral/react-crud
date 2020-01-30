import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => { 
  console.log(state)
  const { recipesList } = state;
  return {recipesList}
 };
const mamDispatchToProps = dispatch => ({ dispatch });
const RecipesList = ({recipesList, dispatch}) => {
  
    // eslint-disable-next-line no-console
    console.log(recipesList);
        // eslint-disable-next-line no-console
        console.log(dispatch);
  

  

  
  return (
    <div>
      <h1>Recipes list here</h1>
      {recipesList.map(item => <h2 key={item.key}>{item.title}</h2>)}
    </div>
  );
};

export default connect(mapStateToProps, mamDispatchToProps)(RecipesList);
