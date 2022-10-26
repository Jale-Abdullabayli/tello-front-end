import { createSlice } from '@reduxjs/toolkit';
import { signup, signin,updateUserAsync } from '../actions/authAction';

const user = JSON.parse(localStorage.getItem("auth"));

const initialState = {
    loading: false,
    auth: user?.data?.token ? true : false,
    profile: user?.data?.token ? user?.data?.user : null,
    token: user?.data?.token ? user?.data?.token : "",
    error: null
};

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOutSync: (state) => {
            localStorage.removeItem("auth");
            state.loading = false;
            state.auth = false;
            state.profile = null;
            state.token = "";
            state.error = null;
        }
    },
    extraReducers: {
        [signup.pending]: (state) => {
            state.loading = true;
        },
        [signup.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload.message;
        },
        [signup.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.auth = true;
            state.token = payload.data.token;
            state.profile = payload.data.user;
            state.error=null;
        },
        [signin.pending]: (state) => {
            state.loading = true;
        },
        [signin.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload.message;
        },
        [signin.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.auth = true;
            state.token = payload.data.token;
            state.profile = payload.data.user;
            state.error=null;
        },
         [updateUserAsync.pending]: (state) => {
            state.loading = true;
        },
        [updateUserAsync.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload.message;
        },
        [updateUserAsync.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.auth = true;
            state.token = payload.data.token;
            state.profile = payload.data.user;
            state.error=null;
        }
    }
})

export const { logOutSync } = authReducer.actions
export default authReducer.reducer;