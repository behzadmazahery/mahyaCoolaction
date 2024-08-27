import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">

            <section className="footer__box">

                <article className="footer__right" >
                    {/* menu  */}

                    <ul>
                        <li>
                            <Link to="/"> صفحه اصلی </Link>


                        </li>
                        <li>
                            <Link to="/Productpage">فروشگاه</Link>

                        </li>
                        <li>
                            <Link to="/BlogPage">درباره ما</Link>

                        </li>
                        <li>
                            <Link to="/AboutPage">مقالات</Link>
                        </li>
                    </ul>

                    {/* signIn */}

                    <div className="footer__login">
                        <button>  ایمیل </button>
                        <input type="text" placeholder=" ایمیل خود را وارد کنید" />
                    </div>



                </article>


                <article className="footer__center" >
                    <h2> کالکشن محیا </h2>
                    <p> فروشگاه اینترنتی "کالکشن محیا" انتخابی برتر برای خرید آنلاین مد و پوشاک است. با مجموعه‌ای بی‌نظیر از لباس‌های زنانه، مردانه و بچگانه، این فروشگاه نیازهای مختلف مشتریان را با بهترین کیفیت و قیمت‌های مناسب پاسخ می‌دهد. ارائه تنوع از برندهای معتبر و محصولات منحصر به فرد، تجربه‌ای لذت‌بخش از خرید اینترنتی را فراهم می‌کند. ارسال سریع، پشتیبانی حرفه‌ای و امکان بازگشت کالا از ویژگی‌های برجسته این فروشگاه است. </p>

                </article>

                <article className="footer__left" >
                    <Link to="/">
                        <img className="footer__logo" src="../../../public/images/logo.png" alt="logo image" />
                    </Link>
                </article>


            </section>


        </footer>
    )
}

export default Footer
