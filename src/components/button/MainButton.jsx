import { Link } from "react-router-dom"
import "./mainButton.css"

const MainButton = ({ route }) => {
    return (
        <Link className="link__btn" to={route}>
            مشاهده همه
        </Link>
    )
}
export default MainButton
