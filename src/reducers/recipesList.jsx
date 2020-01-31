import { REMOVE_ITEM, ADD_ITEM, EDIT_ITEM } from "../actions/Actions";

const recipesList = [
  {
    title: "Banana bread",
    key: "76876768768768768",
    ingredients: ["banana", "milk", "cinnamon"]
  },
  {
    title: "Brownie",
    key: "76gdfg",
    ingredients: ["cacao", "milk", "cinnamon"]
  },
  {
    title: "Chicken soup",
    key: "76hfggh68768768",
    ingredients: ["chicken", "carrots", "pasta"]
  },
  {
    title: "Pancakes",
    key: "7687676hfd768",
    ingredients: ["flavour", "milk", "jam"]
  }
];

const reducer = (state = recipesList, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return [...state].filter(item => item.key !== action.key);

    case ADD_ITEM:
      return [
        ...state,
        {
          title: action.title,
          key: action.key,
          ingredients: [...action.ingredients]
        }
      ];
    case EDIT_ITEM: {
      const index = state.findIndex(item => item.key === action.key);

      const newState = [...state];
      newState[index] = {
        title: action.title,
        key: action.key,
        ingredients: [...action.ingredients]
      };

      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
