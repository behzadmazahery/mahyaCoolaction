import { createSlice } from "@reduxjs/toolkit";

export const servicesSlice = createSlice({
    name: 'services',
    initialState: {
        value: [
            { id: 1, title: "پشتیبانی ۷ روز هفته , ۲۴ ساعته", icon: "../../../public/svgs/supportcom.svg" },
            { id: 2, title: "پرداخت امن", icon: "../../../public/svgs/pay.svg" },
            { id: 3, title: " ۷ روز ضمانت بازگشت کالا", icon: "../../../public/svgs/return.svg" },
            { id: 4, title: "نحوه تحویل اکسپرس", icon: "../../../public/svgs/delivery.svg" },
        ],
    },
})

// export const { increment, decrement, addService, removeService } = servicesSlice.actions;
export default servicesSlice.reducer;
