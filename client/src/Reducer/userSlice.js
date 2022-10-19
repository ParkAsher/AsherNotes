import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",

    initialState: {
        _id: "",
        name: "",
        userid: "",
    },

    reducers: {
        loginUser: (state, action) => {
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.userid = action.payload.userid;
        },
        logoutUser: (state, action) => {
            state._id = "";
            state.name = "";
            state.userid = "";
        },
        clearUser: (state, action) => {
            state._id = "";
            state.name = "";
            state.userid = "";
        }
    }
})

export const { loginUser, logoutUser, clearUser } = userSlice.actions;

export default userSlice.reducer