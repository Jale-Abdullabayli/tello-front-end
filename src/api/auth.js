import axios from './index';

export const signup = (userData) => axios.post('/users/signup', userData);
export const login = (userData) => axios.post('/users/login', userData);
export const changeUserData = (userData) => axios.patch('/users', userData);
export const forgetPassword = (email) => axios.post('/users/forgetPassword', { email });
export const resetPassword = ( newPassword, passwordToken ) => axios.patch(`/users/resetPassword/${passwordToken}`, newPassword);