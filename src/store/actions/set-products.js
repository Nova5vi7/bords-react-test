import actionTypes from "./action-type";

const setProducts = (products) => ({
  type: actionTypes.SET_PRODUCTS,
  payload: {
    products,
  },
});

export default setProducts;
