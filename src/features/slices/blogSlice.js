import { createSlice } from "@reduxjs/toolkit";
import moment from "moment-jalaali";

// تنظیم فرمت تاریخ فارسی
moment.loadPersian({ usePersianDigits: true, dialect: 'persian-modern' });

export const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [
            {
                id: 1,
                img: "../../../public/images/blog01.jpg",
                title: "چطور تولید محتوی کنیم",
                content: "متن بلاگ 1 با توضیحات و محتواهای مربوط به آن.",
                author: "بهزاد مظاهری",
                createdAt: moment().format('jYYYY/jM/jD ساعت HH:mm:ss'),
            },
            {
                id: 2,
                img: "../../../public/images/blog02.jpg",
                title: "خرید آنلانین",
                content: "متن بلاگ 2 با توضیحات و محتواهای مربوط به آن.",
                author: "بهزاد مظاهری",
                createdAt: moment().format('jYYYY/jM/jD ساعت HH:mm:ss'),
            },
            {
                id: 3,
                img: "../../../public/images/blog03.jpg",
                title: "دریافت  تخفیف ",
                content: "متن بلاگ 3 با توضیحات و محتواهای مربوط به آن.",
                author: "بهزاد مظاهری",
                createdAt: moment().format('jYYYY/jM/jD  ساعت HH:mm:ss'),
            },
        ]
    },
    reducers: {
        addBlog: (state, action) => {
            state.blogs.push({ ...action.payload, createdAt: moment().format('jYYYY/jM/jD HH:mm:ss') });
        },
        removeBlog: (state, action) => {
            state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
        },
        updateBlog: (state, action) => {
            const index = state.blogs.findIndex(blog => blog.id === action.payload.id);
            if (index !== -1) {
                state.blogs[index] = { ...action.payload, createdAt: state.blogs[index].createdAt };
            }
        }
    }
});

export const { addBlog, removeBlog, updateBlog } = blogSlice.actions;
export default blogSlice.reducer;
