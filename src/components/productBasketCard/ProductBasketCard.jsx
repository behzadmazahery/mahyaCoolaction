import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../features/slices/productsSlice";
import { decrementProductCount, incrementProductCount } from "../../features/slices/productsSlice";

function ProductBasketCard({ index, title, img, price, productId, count }) {


    const dispatch = useDispatch();

    const removeProductFromBasket = (productId) => {
        console.log("Removing product with ID:", productId);
        dispatch(removeFromBasket(productId));
    };

    return (
        <div key={index} className="product__basket" data-aos="fade-down">
            <img className="product__basketImg" src={img} alt={title} />
            <h2 className="product__basketTitle">{title}</h2>
            <p className="product__basketDesk">قیمت: {price} تومان</p>
            <div className="product__basketCount">
                <button className="product__incrementBtn" onClick={() => dispatch(incrementProductCount(productId))}>+</button>
                <span className="product__count"> {count} </span>
                <button className="product__decrementBtn" onClick={() => dispatch(decrementProductCount(productId))}>-</button>
            </div>
            <button onClick={() => removeProductFromBasket(productId)} className="product__basketRemove">
                <AiOutlineDelete />
            </button>
        </div>
    );
}

export default ProductBasketCard;
