import { useSelector } from "react-redux"
import "./category.css"
import { Link } from "react-router-dom";

const Category = () => {

    const categoryList = useSelector(state => state.category.categories);

    return (
        <div className="category__box" >
            <ul className="category__list">

                {categoryList.map((category, index) => (

                    <li key={index} className="category__item">
                        <Link className="category__link" to={`/ProductPage`}>
                            <img src={category.img} alt="product category " />
                            <span className="category__title">{category.title}</span>
                            <div className="category__layer"></div>
                        </Link>
                    </li>

                ))}

            </ul>

        </div>
    )
}

export default Category
