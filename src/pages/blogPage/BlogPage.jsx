import { useSelector } from "react-redux"
import "./blogPage.css"
const BlogPage = () => {
    const blogItems = useSelector(state => state.blogItems.blogItems)
    return (
        <div className="container blogpage__box ">

            {blogItems && blogItems.map(blog => {
                return (
                    <div key={blog.id} className="blogpage__item">
                        <img className="blogItem__img" src={blog.img} alt={blog.title} />
                        <h3 className="blogitem__title" >{blog.title}</h3>
                        <p>{blog.desc}</p>
                        {/* <a href={`/blog/${blog.id}`}>Read More</a> */}
                    </div>
                )
            })}


        </div>
    )
}
export default BlogPage