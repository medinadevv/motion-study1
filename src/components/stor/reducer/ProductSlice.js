import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    product: {}
}
export const ProductReducer = createSlice({
    name: "PRODUCT",
    initialState,
    reducers: {
        getProduct(state, action) {
            state.product = {...action.payload}
        }
    }
})
export default ProductReducer.reducer
export const {getProduct} = ProductReducer.actions