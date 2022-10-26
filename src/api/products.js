import axios from './index';

export const getProducts=()=>axios.get('/products');
export const getPriceRange=()=>axios.get('/products/price-range');
export const getProductById=(id)=>axios.get(`/products/${id}`);