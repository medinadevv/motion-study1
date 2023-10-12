import {getProduct} from "../ProductSlice";

export const getPrREC = (el) => (dispatch) => {
    dispatch(getProduct(el))
}
