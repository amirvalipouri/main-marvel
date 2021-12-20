import { createSlice } from '@reduxjs/toolkit';

const initialState  = {isLogin : false};

const authSlice = createSlice({
    name: "auth",
    initialState ,
    reducers: {
        Login(state) {
            state.isLogin = true
        },
        Logout(state) {
            state.isLogin = false
        }
    }
})

export const authAction = authSlice.actions;
export default authSlice.reducer