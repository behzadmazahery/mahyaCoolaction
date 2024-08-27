import { Link } from "react-router-dom"
import "./productCard.css"

const ProductCard = ({ img, title, description, price, id }) => {
    return (

        <div className='bestSeler__item' data-aos="fade-up">
            <img className='bestSeler__img' src={img} alt={name} />
            <div className='bestSeler__info'>
                <h4 className='bestSeler__title' >{title}</h4>
                <p className='bestSeler__desc' >{description}</p>
                <p className='bestSEler__price' >{price} تومان</p>
                <Link className="bestSeler__btn" to={`/ProductDetail/${id}`}> مشاهده محصول </Link>
            </div>
        </div>

    )
}

export default ProductCard 