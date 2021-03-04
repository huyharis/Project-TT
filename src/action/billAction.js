import axios from "axios";
import { serverUrl } from "../utils/config";

export const saveBill = (bill) => {
  return (dispatch, getState) => {
    const state = getState();
    bill["product"] = state.cart;
    axios.post(`${serverUrl}/api/order/save`, bill).then((res) => {
      dispatch({ type: "SAVE_BILL", payload: res.data });
      localStorage.removeItem("state");
      dispatch({ type: "REMOVE_ALL_ITEM_IN_CART" });
    });
  };
};
