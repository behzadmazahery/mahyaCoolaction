import { createSlice } from "@reduxjs/toolkit";


export const brandsSlice = createSlice({
    name: 'brands',
    initialState: {
        brands: [
            {
                id: 1,
                img: "../../../public/images/brand01.png",
            },
            {
                id: 2,
                img: "../../../public/images/brand02.png",
            },
            {
                id: 3,
                img: "../../../public/images/brand03.png",
            },
            {
                id: 4,
                img: "../../../public/images/brand04.png",
            },
            {
                id: 5,
                img: "../../../public/images/brand05.png",
            },
            {
                id: 6,
                img: "../../../public/images/brand06.png",
            },

        ]
    },
});



export default brandsSlice.reducer;

