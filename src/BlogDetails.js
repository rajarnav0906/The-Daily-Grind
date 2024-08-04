import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const BlogDetails = () => {

    const {id} = useParams();
    const {data:blog , loading, error} = useFetch(`http://localhost:8000/blogs/${id}`);

    const history = useHistory();

    const handledelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE"
        }).then(() => {
            history.push("/");
        })
    }

    return ( 
        <div className="blog-details">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by - <span>{blog.author}</span></p>
                    <div>{blog.body}</div>
                    <button onClick={handledelete}>Delete Blog</button>
                </article>
            )}

            
        </div>
     );
}
 
export default BlogDetails;