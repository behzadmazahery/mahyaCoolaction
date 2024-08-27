import { useDispatch, useSelector } from "react-redux"
import "./login.css"
import { userLoginHandler } from "../../features/slices/userLoginSlice";
function Login() {

    const userExist = useSelector(state => state.userLogin.isExisting);
    const inputData = useSelector(state => state.userLogin.inputData);


    console.log(userExist);
    const dispatch = useDispatch();



    const addUserToWebsite = () => {
        dispatch(userLoginHandler(""))
    }

    return (
        <section className="login__box">
            <form className="login__form" onSubmit={(event) => event.preventDefault()}>
                <p> لطفا شماره تماس خود را وارد کنید </p>
                <input
                    className="userPhoneNumber"
                    type="text"
                    value={inputData}
                    placeholder="...09"
                    onChange={(event) => dispatch(userLoginHandler(event.target.value))}
                />
                {!userExist ? <span className="error">شماره تماس وارد شده نامعتبر است</span> : <span className="success">شماره تماس وارد شده معتبر است</span>}
                <button onClick={addUserToWebsite} className="login__btn" type="submit" > ثبت نام </button>



            </form>
        </section>
    )
}

export default Login
