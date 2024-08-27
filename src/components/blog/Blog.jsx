import { useSelector } from "react-redux";
import Title from "../title/Title";
import "./blog.css"
// import { addBlog, removeBlog, updateBlog } from "../../features/slices/blogSlice";

const BlogComponent = () => {
    const blogs = useSelector(state => state.blogs.blogs);

    // const dispatch = useDispatch();

    // const handleAddBlog = () => {
    //     dispatch(addBlog({ id: 4, title: "بلاگ 4", content: "متن بلاگ 4...", author: "نویسنده 4" }));
    // };

    // const handleRemoveBlog = (blogId) => {
    //     dispatch(removeBlog(blogId));
    // };

    // const handleUpdateBlog = () => {
    //     dispatch(updateBlog({ id: 1, title: "بلاگ 1 (به‌روزرسانی)", content: "متن به‌روزرسانی شده بلاگ 1...", author: "نویسنده 1" }));
    // };

    return (
        <div className="blogs" >
            <Title route="/BlogPage" title="مقالات" />

            <div className="blog__box">
                {blogs.map(blog => (
                    <div className="blog__item" key={blog.id}>
                        <div className="blog__img__box">
                            <img className="blog__img" src={blog.img} alt="blog image" />
                        </div>
                        <div className="blog__info">
                            <h3 className="blog__title" >{blog.title}</h3>
                            <p className="blog__text" >{blog.content}</p>
                            <p className="blog__at" ><small>نویسنده: <b> {blog.author} </b> </small></p>
                            <span className="blog__date" > تاریخ: {blog.createdAt} </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogComponent;
