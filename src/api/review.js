import axios from './index';


export const addReview = (review,productId)=>axios.post( `/products/${productId}/reviews`,review);
