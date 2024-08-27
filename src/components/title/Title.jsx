import MainButton from "../button/MainButton"
import "./title.css"

const Title = ({ title , route }) => {
    return (
        <div className="title__box">
            <h2> {title} </h2>
            <MainButton route={route} />
        </div>
    )
}

export default Title
