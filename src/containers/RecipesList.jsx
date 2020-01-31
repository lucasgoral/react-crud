import React, { useState } from "react";
import { connect } from "react-redux";
import AddRecipe from "./AddRecipe";
import EditRecipe from "./EditRecipe";
import RecipeItem from "../components/RecipeItem";
import Modal from "../components/Modal";
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

  const initialModalState = {
    visible: false,
    editMode: false,
    itemId: ""
  };
  const [editorState, setEditorlState] = useState(initialModalState);

  const openAddItem = () => {
    setEditorlState({ visible: true, editMode: false });
  };

  const openEditItem = key => {
    setEditorlState({ visible: true, editMode: true, itemId: key });
  };

  const close = () => {
    alert("close");
  };

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
            openEditItem(item.key);
          }}
        />
      ))}
      <button type="button" onClick={openAddItem}>
        Add item
      </button>
      <Modal visible={editorState.visible} close={close}>
        {editorState.editMode ? (
          <EditRecipe itemId={editorState.itemId} />
        ) : (
          <AddRecipe />
        )}
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
