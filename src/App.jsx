import { Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/header/Header"
import Home from "./pages/homepage/Home";
import ProductPage from "./pages/productsPage/ProductPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import BlogPage from "./pages/blogPage/BlogPage";
import Footer from "./components/footer/Footer";
import ProductDetail from "./pages/productDetail/ProductDetail";
import ScrollToTop from "./ScrollTop";
import UserBasket from "./pages/userBasket/UserBasket";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/UserBasket" element={<UserBasket />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      <script>
        AOS.init();
      </script>
    </div>
  )
}

export default App
