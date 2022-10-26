import axios from './index';


export const checkout = (products)=>axios.post('/payment/checkout',{products});