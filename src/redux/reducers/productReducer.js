import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsAsync } from '../actions/productAction';

const initialState = {
    loading: false,
    products: [],
    error: null
};

export const productReducer = createSlice({
    name: 'product',
    initialState,
    extraReducers: {
        [fetchProductsAsync.pending]: (state, { payload }) => {
            state.loading = true;
        },
        [fetchProductsAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [fetchProductsAsync.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.products = payload;
        }
    }
})

export default productReducer.reducer;