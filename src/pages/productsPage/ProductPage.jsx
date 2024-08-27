import { IoSearchOutline } from "react-icons/io5";
import ProductCard from "../../components/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import "./productPage.css"
import BestSelerSlider from "../../components/bestSeler/BestSelerSlider";
import { filterByColor, resetFilters, filterBySearchProducts, filterByTitle, filterByPriceَUpToDown, filterByPriceَDownToUp } from "../../features/slices/productsSlice";
import { useState } from "react";


const ProductPage = () => {
    const products = useSelector(state => state.products.products);
    const filterByColors = useSelector(state => state.products.filterProductsLists);
    const [selectedColor, setSelectedColor] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useDispatch();

    const handleColorChange = (color) => {
        if (selectedColor === color) {
            // اگر رنگی که انتخاب شده است همان رنگ قبلی است، فیلترها را ریست کنید
            setSelectedColor(null);
            dispatch(resetFilters());
        } else {
            // در غیر این صورت، رنگ انتخاب شده را تنظیم کنید و فیلتر بر اساس رنگ را اعمال کنید
            setSelectedColor(color);
            dispatch(filterByColor(color));
        }
    };

    // Handle search input changes
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };


    // Apply search filter when search button is clicked
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            dispatch(filterBySearchProducts(searchQuery));
        } else {
            dispatch(resetFilters());
        }
        if (searchQuery.trim() == "") {
            return false;
        }


        // Clear the search input field
        setSearchQuery("");
    };

    const filterColor = [
        { id: 1, title: "همه رنگها" },
        { id: 2, title: "سرمه ای" },
        { id: 3, title: "سفید" },
        { id: 4, title: "نارنجی" },
    ];

    const productTitles = [
        { id: 1, title: "مانتو" },
        { id: 2, title: "پیراهن" },
        { id: 3, title: "تیشرت" },
    ]




    // Check if there are any filtered products; if not, show all products
    const displayedProducts = filterByColors.length > 0 ? filterByColors : products;



    return (
        <section className="product-page">
            
            <div className="product-page__box">

                <aside className="product-aside">
                    <form className="product-searchForm">
                        <button className="product-searchBtn" type="submit" onClick={handleSearch} >
                            <IoSearchOutline />
                        </button>
                        <input
                            className="product-searchInput"
                            type="text"
                            placeholder="جستجو محصول ..."
                            onChange={handleSearchChange}
                        />
                    </form>

                    <hr />

                    {/* filter by color */}
                    <div className="filterBy__colors__box">
                        <h3 className="colors__filter">رنگ بندی ها</h3>
                        <div className="product-aside__colorFilter">
                            {filterColor.map(item => {
                                return (
                                    <label key={item.id}>
                                        <input
                                            type="checkbox"
                                            name="color"
                                            value={item.id}
                                            checked={item.title === selectedColor}
                                            onChange={() => handleColorChange(item.title)}

                                        // onChange={(e) => {
                                        //     if (e.target.checked) {
                                        //         dispatch(filterByColor(item.title));
                                        //     } else {
                                        //         dispatch(resetFilters());
                                        //     }
                                        // }}
                                        />
                                        <span className="color__title">{item.title}</span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    {/* filter by category */}
                    <hr />
                    <div className="filterBy__catgory__box">
                        <h3 className="category__filter">دسته بندی ها</h3>
                        <div className="product-aside__colorFilter">

                            {productTitles.map(item =>
                                <label key={item.id} >
                                    <input type="checkbox" name="color" value="red" onChange={() => dispatch(filterByTitle(item.title))} />
                                    <span className="color__title"> {item.title} </span>
                                </label>)}
                        </div>
                    </div>

                    <br />

                    {/* filter by price */}
                    <hr />
                    <div className="filterBy__price__box">
                        <h3 className="price__filter">قیمت</h3>
                        <div className="product-aside__priceFilter">

                            <label>
                                <input type="checkbox" name="price" value="low" onChange={() => dispatch(filterByPriceَUpToDown("asc"))} />
                                <span className="price__title">کمترین قیمت</span>
                            </label>

                            <label>
                                <input type="checkbox" name="price" value="high"
                                    onChange={() => dispatch(filterByPriceَDownToUp("desc"))}
                                />
                                <span className="price__title">بیشترین قیمت</span>
                            </label>
                        </div>
                    </div>
                </aside>

                <section className="product-listBox">
                    {/* Display either filtered or all products */}
                    <div className="product-listItems">
                        {displayedProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                img={product.img}
                                title={product.title}
                                description={product.description}
                                id={product.id}
                                price={product.price}
                            />
                        ))}
                    </div>
                </section>

            </div>
            <BestSelerSlider />
        </section>
    );
};

export default ProductPage;
