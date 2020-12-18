import actionType from "../actions/action-type";

const products = (state = [], action) => {
  switch (action.type) {
    case actionType.SET_PRODUCTS:
      return [...state, ...action.payload.products];

    default:
      return state;
  }
};

export default products;
