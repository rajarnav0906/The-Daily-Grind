import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs, title}) => {
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    
                    
                        <h2>{blog.title}</h2>
                        <p> Written by {blog.author}</p>
                        <p>{blog.body.slice(0, 100)+"......."}
                            <Link to={`/blogs/${blog.id}`}>Read More</Link>
                        </p>
                        
                
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;