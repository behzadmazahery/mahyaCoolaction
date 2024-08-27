import { createSlice } from "@reduxjs/toolkit";

export const userLoginSlice = createSlice({
    name: "login",
    initialState: {
        inputData: "",
        isExisting: false
    },
    reducers: {
        userLoginHandler: (state, action) => {
            state.inputData = action.payload;

            if (!state.inputData || state.inputData.length !== 11 || !/^\d+$/.test(state.inputData)) {
                state.isExisting = false;
            } else {
                state.isExisting = true;
            }
        },
    },


});



export const { userLoginHandler } = userLoginSlice.actions
export default userLoginSlice.reducer;



