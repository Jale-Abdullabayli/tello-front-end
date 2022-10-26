import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./reducers/productReducer";
import productByIdReducer from './reducers/productByIdReducer';
import authReducer from './reducers/authReducer';
import basketReducer from './reducers/basketReducer';


export const store = configureStore({
  reducer: {
    productReducer,
    productByIdReducer,
    authReducer,
    basketReducer
  }
});