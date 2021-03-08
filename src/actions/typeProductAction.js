import axios from "axios";
import { serverUrl } from "../utils/config";

export const getTypeProduct = () => {
  return (dispatch) => {
    axios
      .get(`${serverUrl}/api/product/getType`)
      .then((res) => dispatch({ type: "GET_TYPE_PRODUCT", payload: res.data }));
  };
};
