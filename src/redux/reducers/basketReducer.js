import { createSlice } from '@reduxjs/toolkit'
import { getBasketAsync,addToBasketAsync, clearBasketAsync, updateBasketAsync, removeFromBasketAsync } from '../actions/basketAction';



const initialState = {
    loading: false,
    error: null,
    basket: {}
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    extraReducers: {
        [getBasketAsync.pending]: (state) => {
            state.loading = true;
        },
        [getBasketAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getBasketAsync.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.basket = payload;
        },
        [addToBasketAsync.pending]: (state, { payload }) => {
            state.loading = true;
        },
        [addToBasketAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [addToBasketAsync.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.basket = payload;
        },
        [removeFromBasketAsync.pending]: (state, { payload }) => {
            state.loading = true;
        },
        [removeFromBasketAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [removeFromBasketAsync.fulfilled]: (state, { payload }) => {
            state.basket = payload;
            state.loading = false;
        },
        [updateBasketAsync.pending]: (state, { payload }) => {
            state.loading = true;
        }
        ,
        [updateBasketAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        }
        ,
        [updateBasketAsync.fulfilled]: (state, { payload }) => {
            state.basket = payload;
            state.loading = false;
        }
        ,
        [clearBasketAsync.pending]: (state, { payload }) => {
            state.loading = true;
        }
        ,
        [clearBasketAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        }
        ,
        [clearBasketAsync.fulfilled]: (state, { payload }) => {
            state.basket = payload;
            state.loading = false;
        }
    }
})


export default basketSlice.reducer