import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import "./productDetail.css";
import SuggestionProducts from "../../components/suggestionProducts/SuggestionProducts";
import Brands from "../../components/brands/Brands";
import { addToBasket } from "../../features/slices/productsSlice";

const ProductDetail = () => {
    const params = useParams();
    const bestSelerData = useSelector(state => state.products.products);
    const product = bestSelerData.find(item => item.id === parseInt(params.id));

    const dispatch = useDispatch();

    const handleAddTobasket = (product) => {
        dispatch(addToBasket(product));

        // console.log("Product added to basket:", product);
        localStorage.setItem("basketProduct", JSON.stringify(product));

    };

    return (
        <section className="productDetail">

            <article className="productDetail__box">

                <div className="right__box">
                    <div className="product__select__image">
                        <img src={product.img} alt="product image" />
                        <img src={product.img} alt="product image" />
                        <img src={product.img} alt="product image" />
                    </div>
                    <img className="product__img" src={product.img} alt="product detail image" />
                </div>


                <div className="left__box">
                    <div className="left__head__box">
                        <h3 className="product__title">{product?.title || "product Name"}</h3>
                        <span className="product__interest"><CiHeart /></span>
                    </div>
                    <hr className="line" />
                    <p className="product__category"><span>دسته‌بندی</span> : محصولات زنانه</p>
                    <p className="product__desc"><span> توضیحات : </span> {product?.description || "توضیحات محصول"}</p>
                    <p className="product__price"><span>قیمت </span>  : {product?.price || "0"} تومان</p>
                    <p className="product__qty" > <span  >موجودی در انبار  </span> :  {product.qty} عدد </p>
                    <button onClick={() => handleAddTobasket(product)} className="product__addBtn">افزودن به سبد خرید</button>
                    <p className="product__longdesc"><span> توضیحات : </span> : {product?.longDescription || "توضیحات بیشتر محصول"}</p>
                </div>
            </article>

            <SuggestionProducts />
            <Brands />
        </section>
    );
};

export default ProductDetail;
