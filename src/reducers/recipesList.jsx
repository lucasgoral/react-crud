

const recipesList = [
   {title: 'Banana bread',key:'76876768768768768', ingredients: ['banana', 'milk', 'cinnamon']},
   {title: 'Brownie',key:'76gdfg', ingredients: ['cacao', 'milk', 'cinnamon']},
   {title: 'Chicken soup',key:'76hfggh68768768', ingredients: ['chicken', 'carrots', 'pasta']},
   {title: 'Pancakes',key:'7687676hfd768', ingredients: ['flavour', 'milk', 'jam']}
  ]
 


const reducer = (state = recipesList, action) => {
  switch (action.type) {
    case 'SET_TRACK':
      return {
        ...state, trackNumber: action.trackNumber
      };

    default:
      return state;
  }
}


export default reducer;
