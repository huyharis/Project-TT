const initialState = [];

function typeProductReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TYPE_PRODUCT":
      return action.payload;
    default:
      return state;
  }
}
export default typeProductReducer;
