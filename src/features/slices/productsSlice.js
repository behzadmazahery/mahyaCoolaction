import { createSlice } from "@reduxjs/toolkit";

// تابع برای کوتاه کردن توضیحات
const shortenDescription = (description) => {
    return description.length > 30 ? description.substring(0, 35) + "..." : description;
};

// بارگذاری داده‌ها از Local Storage
const loadUserBasketProducts = () => {
    const data = localStorage.getItem('userBasketProducts');
    return data ? JSON.parse(data) : [];
};

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        userBasketProducts: loadUserBasketProducts(), // بارگذاری داده‌ها از Local Storage
        filterProductsLists: [],
        products: [
            {
                id: 1,
                img: "../../../public/images/p1.jpg",
                title: "مانتو",
                price: 450000,
                categoryId: 1,
                color: "نارنجی",
                qty: "۳۰",
                size: "sm",
                longDescription: "محصول 1 با کیفیت بالا و طراحی مدرن، مناسب برای استفاده روزمره و مجالس خاص. دارای دوام بالا و مواد اولیه مرغوب.",
                description: shortenDescription("محصول 1 با کیفیت بالا و طراحی مدرن، مناسب برای استفاده روزمره و مجالس خاص. دارای دوام بالا و مواد اولیه مرغوب.")
            },
            {
                id: 2,
                img: "../../../public/images/p2.jpg",
                title: "مانتو",
                price: 550000,
                categoryId: 2,
                color: "سرمه ای",
                qty: "۲۴",
                size: "sm",
                longDescription: "محصول 1 با کیفیت بالا و طراحی مدرن، مناسب برای استفاده روزمره و مجالس خاص. دارای دوام بالا و مواد اولیه مرغوب.",
                description: shortenDescription("محصول 2 با طراحی جذاب و شیک، ایده‌آل برای هدیه دادن و استفاده در مراسمات. ساخته شده از بهترین مواد اولیه.")
            },
            {
                id: 3,
                img: "../../../public/images/p3.jpg",
                title: "پیراهن",
                price: 320000,
                categoryId: 3,
                color: "سفید",
                qty: "۱۲",
                size: "l",
                longDescription: "محصول 1 با کیفیت بالا و طراحی مدرن، مناسب برای استفاده روزمره و مجالس خاص. دارای دوام بالا و مواد اولیه مرغوب.",
                description: shortenDescription("محصول 3 با قابلیت‌های منحصر به فرد و طراحی کاربرپسند، مناسب برای تمام افراد خانواده. دارای ضمانت کیفیت.")
            },
            {
                id: 4,
                img: "../../../public/images/p4.jpg",
                title: "تیشرت",
                price: 410000,
                categoryId: 4,
                color: "سفید",
                qty: "۳۷",
                size: "l",
                longDescription: "محصول 1 با کیفیت بالا و طراحی مدرن، مناسب برای استفاده روزمره و مجالس خاص. دارای دوام بالا و مواد اولیه مرغوب.",
                description: shortenDescription("محصول 4 با قیمت مناسب و کیفیت عالی، ایده‌آل برای استفاده روزانه. دارای طراحی زیبا و مواد اولیه مرغوب.")
            },
            {
                id: 5,
                img: "../../../public/images/p5.jpg",
                title: "تیشرت",
                price: 365000,
                categoryId: 5,
                color: "سفید",
                qty: "۵۲",
                size: "xl",
                longDescription: "محصول 1 با کیفیت بالا و طراحی مدرن، مناسب برای استفاده روزمره و مجالس خاص. دارای دوام بالا و مواد اولیه مرغوب.",
                description: shortenDescription("محصول 5 با طراحی مدرن و منحصر به فرد، مناسب برای استفاده در محیط‌های مختلف. ساخته شده از بهترین مواد اولیه.")
            },
            {
                id: 6,
                img: "../../../public/images/p6.jpg",
                title: "تیشرت",
                price: 785000,
                categoryId: 6,
                color: "سفید",
                qty: "۱۴",
                size: "xl",
                longDescription: "محصول 1 با کیفیت بالا و طراحی مدرن، مناسب برای استفاده روزمره و مجالس خاص. دارای دوام بالا و مواد اولیه مرغوب.",
                description: shortenDescription("محصول 6 با کیفیت بی‌نظیر و طراحی جذاب، مناسب برای استفاده حرفه‌ای و شخصی. دارای ضمانت و خدمات پس از فروش.")
            },
        ],
    },
    reducers: {

        addToBasket: (state, action) => {
            const existingProduct = state.userBasketProducts.find(product => product.id === action.payload.id);
            if (existingProduct) {
                // اگر محصول در سبد موجود است، تعداد آن را افزایش دهید
                existingProduct.count += 1;
                // existingProduct.count += action.payload.price;  // قیمت کل بر اساس تعداد به‌روزرسانی شود
                existingProduct.totalPrice += action.payload.price;
            } else {
                // اگر محصول در سبد موجود نیست، آن را اضافه کنید
                state.userBasketProducts.push({ ...action.payload, count: 1 });
            }
            // ذخیره در Local Storage
            localStorage.setItem('userBasketProducts', JSON.stringify(state.userBasketProducts));
        },

        removeFromBasket: (state, action) => {
            const index = state.userBasketProducts.findIndex(product => product.id === action.payload);
            if (index !== -1) {
                state.userBasketProducts.splice(index, 1);
                // ذخیره در Local Storage
                localStorage.setItem('userBasketProducts', JSON.stringify(state.userBasketProducts));
            }
        },

        decrementProductCount: (state, action) => {
            const existingProduct = state.userBasketProducts.find(product => product.id === action.payload);
            if (existingProduct) {
                if (existingProduct.count > 1) {
                    existingProduct.count -= 1;
                    existingProduct.totalPrice = existingProduct.count * existingProduct.price; // قیمت کل به‌روز می‌شود
                } else {
                    // اگر تعداد به 1 رسید، محصول را از سبد خرید حذف کنید
                    const index = state.userBasketProducts.findIndex(product => product.id === action.payload);
                    if (index !== -1) {
                        state.userBasketProducts.splice(index, 1);
                    }
                }
                localStorage.setItem('userBasketProducts', JSON.stringify(state.userBasketProducts));
            }
        },

        incrementProductCount: (state, action) => {
            const existingProduct = state.userBasketProducts.find(product => product.id === action.payload);
            if (existingProduct) {
                existingProduct.count += 1;
                existingProduct.totalPrice = existingProduct.count * existingProduct.price; // قیمت کل به‌روز می‌شود
                localStorage.setItem('userBasketProducts', JSON.stringify(state.userBasketProducts));
            }
        },

        // filter by products colors

        filterByColor: (state, action) => {
            state.filterProductsLists = state.products.filter(product => product.color === action.payload);
        },

        // sort products by price

        sortProductsByDownToUpPrice: (state, action) => {
            state.products.sort((a, b) => action.payload === 'asc' ? a.price - b.price : b.price - a.price);
        },

        resetFilters: (state, action) => {

            // show all prodcuts

            if (action.payload === "همه زنگها") {
                state.filterProductsLists = [...state.products];
            }
        },

        // search products by input field

        filterBySearchProducts: (state, action) => {
            state.filterProductsLists = state.products.filter(product =>
                product.title.toLowerCase().includes(action.payload.toLowerCase())
            );
        },

        // filter by title

        filterByTitle: (state, action) => {
            // console.log("Filtering by title:", action.payload);
            state.filterProductsLists = state.products
                .filter(product => product.title === action.payload);
            // console.log("Filtered products:", state.filterProductsLists);
        },

        // sort By price up to down 

        filterByPriceَUpToDown: (state, action) => {
            state.filterProductsLists = state.products.slice().sort((a, b) =>
                action.payload === 'asc' ? a.price - b.price : b.price - a.price
            );
        },

        // sort By price down to up

        filterByPriceَDownToUp: (state, action) => {
            state.filterProductsLists = state.products.slice().sort((a, b) =>
                action.payload === 'desc' ? b.price - a.price : a.price - b.price
            );
        },

        // addToBasket: (state, action) => {
        //     const existingProduct = state.userBasketProducts.find(product => product.id === action.payload.id);
        //     if (existingProduct) {
        //         // اگر محصول در سبد موجود است، تعداد آن را افزایش دهید
        //         existingProduct.count += 1;
        //         existingProduct.price += action.payload.price;  // قیمت کل بر اساس تعداد به‌روزرسانی شود
        //     } else {
        //         // اگر محصول در سبد موجود نیست، آن را اضافه کنید
        //         state.userBasketProducts.push({ ...action.payload, count: 1 });
        //     }
        //     // ذخیره در Local Storage
        //     localStorage.setItem('userBasketProducts', JSON.stringify(state.userBasketProducts));
        // },


    },
});

export const { addToBasket, removeFromBasket, filterByColor, sortProductsByDownToUpPrice, resetFilters, filterBySearchProducts, filterByTitle, filterByPriceَUpToDown, filterByPriceَDownToUp, decrementProductCount
    , incrementProductCount } = productSlice.actions;
export default productSlice.reducer;
