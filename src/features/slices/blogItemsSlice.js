import { createSlice } from "@reduxjs/toolkit";

import img1 from "../../../public/images/blogitem01.jpg"
import img2 from "../../../public/images/blogitem02.jpg"
import img3 from "../../../public/images/blogitem03.jpg"
import img4 from "../../../public/images/blogimage04.jpg"
import img5 from "../../../public/images/blogitem05.jpg"



export const blogItemsSlice = createSlice({
    name: "blogItems",
    initialState: {

        // blog items 

        blogItems: [
            {
                id: 1,
                img: img1,
                title: "چگونه لباس‌های پاییزی را با هم ترکیب کنیم؟",
                desc: "فصل پاییز با رنگ‌های گرم و زیبای خود، فرصت مناسبی برای ترکیب و ست کردن لباس‌های مختلف است. از ترکیب پالتوهای بلند با شال گردن‌های پشمی و بوت‌های چرم گرفته تا پوشیدن کت‌های جین با بلوزهای سبک و کفش‌های کتانی، انتخاب‌های متنوعی برای ایجاد استایلی شیک و جذاب وجود دارد. انتخاب رنگ‌های تیره مانند قهوه‌ای و خاکستری در کنار رنگ‌های گرم مانند نارنجی و زرد، به استایل شما حس گرما و صمیمیت می‌بخشد."
            },
            {
                id: 2,
                img: img2,
                title: " نکاتی برای خرید لباس‌های تابستانی",
                desc: "در فصل تابستان، انتخاب لباس‌های مناسب برای حفظ خنکی و راحتی بسیار اهمیت دارد. بهترین انتخاب‌ها شامل پارچه‌های نخی و کتان است که اجازه می‌دهند هوا به راحتی از بدن عبور کند و احساس خنکی ایجاد شود. لباس‌های رنگ روشن و طرح‌های گلدار نیز علاوه بر زیبایی، حس تازگی و نشاط به همراه دارند. همچنین، انتخاب لباس‌هایی با طراحی‌های ساده و کاربردی می‌تواند به شما کمک کند تا در روزهای گرم تابستان از استایل خود لذت ببرید."
            },
            {
                id: 3,
                img: img3,
                title: "چگونه استایل مینیمالیستی را به کمد لباس خود بیاوریم؟",
                desc: "زمستان فصلی است که انتخاب لباس‌های گرم و راحت اهمیت ویژه‌ای دارد. بهترین انتخاب‌ها شامل کاپشن‌های پشمی و کاپشن‌های ضدآب است که می‌توانند شما را در برابر سرما محافظت کنند. همچنین، پوشیدن لایه‌های مختلف لباس، مانند تی‌شرت‌های آستین بلند زیر پلیور و شال گردن‌های ضخیم، به شما کمک می‌کند تا همواره گرم و راحت باشید. استفاده از رنگ‌های تیره مانند مشکی و سرمه‌ای به همراه اکسسوری‌های گرم می‌تواند به استایل شما جلوه‌ای شیک و جذاب ببخشد."
            },
            {
                id: 4,
                img: img4,
                title: "تأثیر لباس بر اعتماد به نفس",
                desc: "لباس‌هایی که می‌پوشیم می‌توانند تأثیر عمیقی بر اعتماد به نفس و احساسات ما داشته باشند. پوشیدن لباس‌هایی که به خوبی اندازه هستند و با سلیقه شخصی مطابقت دارند، می‌تواند احساس خوبی در فرد ایجاد کند. رنگ‌های خاصی مانند قرمز و آبی نیز می‌توانند اعتماد به نفس را تقویت کنند. انتخاب لباس‌های با کیفیت و مناسب برای هر موقعیت، به شما کمک می‌کند تا با اطمینان بیشتری در جمع ظاهر شوید."
            },
            {
                id: 5,
                img: img5,
                title: "رنگ‌های ترند سال و نحوه ست کردن آن‌ها",
                desc: "هر سال، رنگ‌های خاصی به عنوان ترند سال معرفی می‌شوند که در صنعت مد و پوشاک تأثیرگذار هستند. در سال جاری، رنگ‌های گرم و خاکی مانند قهوه‌ای شکلاتی، سبز زیتونی و نارنجی تیره از جمله رنگ‌های محبوب هستند. برای ست کردن این رنگ‌ها، می‌توانید از ترکیب آن‌ها با رنگ‌های خنثی مانند کرم و خاکستری استفاده کنید. استفاده از اکسسوری‌های متناسب با این رنگ‌ها نیز می‌تواند به استایل شما جلوه‌ای مدرن و به‌روز ببخشد."
            },
        ]


    },
    reducers: {}
})

export default blogItemsSlice.reducer;