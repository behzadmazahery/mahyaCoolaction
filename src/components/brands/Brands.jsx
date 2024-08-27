import { useSelector } from "react-redux"
import "./brands.css"
const Brands = () => {

    const brands = useSelector(state => state.brands.brands)

    return (
        <section className="brands brands__box">
            <ul className="brands__list">
                {brands.map((brand, index) => (
                    <li key={index} className="brands__item">
                        <img src={brand.img} alt={brand.name} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Brands
