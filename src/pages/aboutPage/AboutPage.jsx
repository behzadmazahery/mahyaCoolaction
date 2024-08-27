import { Link } from "react-router-dom"
import "./aboutPage.css"

const AboutPage = () => {
    return (
        <div className="container about__box ">
            <h1 className="about__title" >
                کالکشن محیا
            </h1>
            <p className="about__box__content" >
                فروشگاه اینترنتی "کالکشن محیا" انتخابی برتر برای خرید آنلاین مد و پوشاک است. با مجموعه‌ای بی‌نظیر از لباس‌های زنانه، مردانه و بچگانه، این فروشگاه نیازهای مختلف مشتریان را با بهترین کیفیت و قیمت‌های مناسب پاسخ می‌دهد. ارائه تنوع از برندهای معتبر و محصولات منحصر به فرد، تجربه‌ای لذت‌بخش از خرید اینترنتی را فراهم می‌کند. ارسال سریع، پشتیبانی حرفه‌ای و امکان بازگشت کالا از ویژگی‌های برجسته این فروشگاه است.
            </p>

            <p>
                برای مشاهده محصولات فروشگاه <Link  className="aboutLink" to="/ProductPage"> کلیک   </Link> کنید
            </p>

        </div>
    )
}

export default AboutPage
