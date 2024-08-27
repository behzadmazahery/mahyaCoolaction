import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./slices/servicesSlice.js"
import categoryReducer from "./slices/categorySlice.js"
import productReducer from "./slices/productsSlice.js"
import blogReducer from "./slices/blogSlice.js"
import brandReducer from "./slices/brandsSlice.js"
import blogItemsReducer from "./slices/blogItemsSlice.js"
import productCounterReducer from "./slices/productCounterSlice.js"
import userLoginReducer from "./slices/userLoginSlice"

export const store = configureStore({
    reducer: {
        service: serviceReducer,
        category: categoryReducer,
        products: productReducer,
        blogs: blogReducer,
        brands: brandReducer,
        blogItems: blogItemsReducer,
        productCounter: productCounterReducer,
        userLogin: userLoginReducer
    },

})
