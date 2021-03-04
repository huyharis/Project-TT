const initialState = [];

const addToCart = (state, payload) => {
  let newState;
  let tag = 0;
  if (state.length !== 0) {
    newState = state.map((cart) => {
      if (cart.id === payload.id) {
        tag = 1;
        return {
          id: payload.id,
          name: payload.name,
          price: payload.price,
          amount: payload.amount + cart.amount,
        };
      } else {
        return cart;
      }
    });
  }
  if (tag === 1) {
    return newState;
  } else {
    return [...state, payload];
  }
};

function cart(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToCart(state, action.payload);
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);
    case "REMOVE_ALL_ITEM_IN_CART":
      return [];
    default:
      return state;
  }
}
export default cart;
