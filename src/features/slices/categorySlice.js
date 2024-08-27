import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [
            { id: 1, img: "../../../public/images/c1.jpg", title: "مجلسی", category: "majlesi" },
            { id: 2, img: "../../../public/images/c2.jpg", title: "راحتی", category: "rahati" },
            { id: 3, img: "../../../public/images/c3.jpg", title: "اسپرت", category: "sport" },
        ]
    },
    reducers: {
        // setCategories: (state, action) => {
        //     state.categories = action.payload;
        // },
    }
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;