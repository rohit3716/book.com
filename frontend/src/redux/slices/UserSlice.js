import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    isLoggedIn:false,
    token:localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

const userSlice = createSlice({
    name: "profile",
    initialState: initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            // console.log(action.payload)
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setIsLoggedIn(state, action){
            state.isLoggedIn = action.payload;
            // console.log("IsLoggedin", state.isLoggedIn);
        },
        setToken(state, value){
            state.token = value.payload;
            // console.log("token value", value.payload);
        }
    },
});

export const { setUser, setLoading, setIsLoggedIn, setToken } = userSlice.actions;
export default userSlice.reducer;
