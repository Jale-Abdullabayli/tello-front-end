import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/products';

export const fetchProductsAsync = createAsyncThunk("product/fetchProducts",
    async () => {
        const response = await api.getProducts();
        const products = response.data.data.products;
        return products;
    }
)


export const fetchProductByIdAsync = createAsyncThunk("productById/fetchProductById",
    async (id) => {
        const response = await api.getProductById(id);
        const product = response.data.data.product;
        return product;
    }
)
