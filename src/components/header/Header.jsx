import "./header.css"
import { Link } from "react-router-dom"
import Logo from "../../../public/images/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useState } from "react";
const Header = () => {

    const userbasket = useSelector(state => state.products.userBasketProducts);

    const [shownavbar, setShownavbar] = useState(false)

    const menuItems = [

        { id: 1, title: "صفحه اصلی ", route: "/" },
        { id: 2, title: "فروشگاه", route: "/ProductPage" },
        { id: 3, title: "مقالات", route: "/BlogPage" },
        { id: 4, title: "درباره ما", route: "/AboutPage" },
    ]

    return (
        <header className="header">
            <div className="header__box">

                <div className="toggle-btn">
                    <span onClick={() => setShownavbar(true)}> <RiMenu3Fill /></span>
                </div>

                <div className="sidebar__header__menu">

                    {shownavbar &&
                        <nav className="sidebar__navbar" >
                            <span onClick={() => setShownavbar(false)} > X </span>
                            <ul className="sideBar__navbar">
                                {menuItems && menuItems.map(item => {
                                    return <li key={item.id}><Link className="sideBar__navbar__item" to={item.route}>{item.title}</Link></li>
                                })}
                            </ul>
                        </nav>
                    }

                </div>

                <div className="logo__box">
                    <h1 className="logo" >
                        <Link className="logo__route" to="/" >
                            <img src={Logo} alt="logo image" />
                        </Link>
                    </h1>
                </div>

                <nav className="navbar" >
                    <ul className="navbar__menu">
                        {menuItems && menuItems.map(item => {
                            return <li key={item.id}><Link className="navbar__item" to={item.route}>{item.title}</Link></li>
                        })}
                    </ul>
                </nav>


                <section className="setting">
                    <ul className="setting__menu">
                        <li className="setting__item" ><Link className="setting__login" to="/login">ورود / ثبت نام</Link></li>
                        <li className="setting__item" ><Link className="setting__userBasket" to="/UserBasket">سبد خرید <span className="setting__basketCounter" > {userbasket === "" ? 0 : userbasket.length} </span> </Link></li>
                    </ul>
                </section>

            </div>
        </header>
    )
}

export default Header
