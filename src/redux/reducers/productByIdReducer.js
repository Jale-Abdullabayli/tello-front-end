import { createSlice } from '@reduxjs/toolkit';
import { fetchProductByIdAsync } from '../actions/productAction';

const initialState = {
    loading: false,
    product: {},
    error: null
};

export const productByIdReducer = createSlice({
    name: 'productById',
    initialState,
    extraReducers: {
        [fetchProductByIdAsync.pending]: (state, { payload }) => {
            state.loading = true;
        },
        [fetchProductByIdAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [fetchProductByIdAsync.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.product = payload;
        }
    }
})

export default productByIdReducer.reducer;