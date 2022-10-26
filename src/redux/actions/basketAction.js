import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../api/index';

export const getBasketAsync = createAsyncThunk(
    'basket/getBasketAsync',
    async () => {
        try {
            const response = await axios.get('/basket');
            return response.data.data.basket;
        }
        catch (err) {
            return err.message
        }
    }
)

export const addToBasketAsync = createAsyncThunk(
    'basket/addToBasketAsync',
    async (basketData) => {
        try {
            const response = await axios.post('/basket', basketData);
            return response.data.data.basket;
        }
        catch (err) {
            return err.message
        }
    }
)


export const updateBasketAsync = createAsyncThunk(
    'basket/updateBasketAsync',
    async ({ _id, productCount }) => {
        try {
            const response = await axios.patch(`/basket`, { id: _id, quantity: productCount });
            return response.data.data.basket;
        }
        catch (err) {
            return err.message
        }
    }
)

export const removeFromBasketAsync = createAsyncThunk(
    'basket/removeFromAsync',
    async (productId) => {
        try {
            const response = await axios.delete(`/basket/product/${productId}`);
            return response.data.data.basket;
        }
        catch (err) {
            return err.message
        }
    }
)

export const clearBasketAsync = createAsyncThunk(
    'basket/clearBasketAsync',
    async () => {
        try {
            const response = await axios.delete(`/basket`);
            return response.data.data.basket;
        }
        catch (err) {
            return err.message
        }
    }
)