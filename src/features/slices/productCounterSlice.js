import { createSlice } from "@reduxjs/toolkit";

export const productCounterSlice = createSlice({
    name: 'productCounter',
    initialState: {
        count: 1,
    },
    reducers: {

        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            if (state.count > 0) {
                state.count -= 1;
            }
        },
    }
})

export const { increment, decrement } = productCounterSlice.actions;

export default productCounterSlice.reducer;