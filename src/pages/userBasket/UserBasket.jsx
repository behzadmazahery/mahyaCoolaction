import { useSelector } from "react-redux";
import "./userbasket.css";
import ProductBasketCard from "../../components/productBasketCard/ProductBasketCard";
import { useEffect, useState } from "react";

// تابع برای تبدیل اعداد انگلیسی به فارسی
const toPersianDigits = (number) => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    return number.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};

// تابع برای فرمت کردن قیمت به صورت رشته با جداکننده هزارگان و اعداد فارسی
const formatPrice = (price) => {
    // تبدیل price به عددی اگر به صورت رشته باشد
    const priceNumber = Number(price);

    // گروه‌بندی ارقام به صورت سه تایی و تبدیل به اعداد فارسی
    const formattedPrice = priceNumber.toLocaleString(); // تبدیل به فرمت هزارگان
    return toPersianDigits(formattedPrice);
};

export default function UserBasket() {

    const choiceProducts = useSelector(state => state.products.userBasketProducts);

    const [allPrice, setAllPrice] = useState(0);

    // محاسبه مجموع قیمت‌ها هر بار که choiceProducts تغییر می‌کند
    useEffect(() => {
        const total = choiceProducts.reduce((acc, product) => acc + (product.price * product.count), 0);
        setAllPrice(total);
    }, [choiceProducts]);


    return (
        <div className="userBasket container">
            {choiceProducts.length > 0 ? (
                <>
                    {choiceProducts.map((product, index) => (
                        <ProductBasketCard
                            key={product.id}
                            index={index}
                            img={product.img}
                            price={formatPrice(product.price)} // نمایش قیمت به فرمت درست
                            title={product.title}
                            productId={product.id}
                            count={product.count}  // استفاده از مقدار count واقعی
                        />
                    ))}

                    <div className="userBasket__total">
                        <h3>مجموع خرید شما :</h3>
                        <span>{formatPrice(allPrice)}</span> {/* فرمت مجدد برای نمایش */}
                    </div>
                </>
            ) : (
                <h2 className="userBasket__message">سبد خرید شما خالی است.</h2>
            )}
        </div>
    );
}
