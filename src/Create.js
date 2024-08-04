import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author};


        //making POST request to the json server
        fetch("http://localhost:8000/blogs", {
            method : 'POST',
            headers : { "Content-Type" : 'application/json' },
            body : JSON.stringify(blog)
        }).then(() => {
            console.log("added");
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>

            <form onSubmit={ handleSubmit }>
                <label> Blog Title:
                    <input 
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label>Blog Content:
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    >
                    </textarea>
                </label>

                <label>Blog author:
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="mario">Mario</option>
                        <option value="yoshi">yoshi</option>
                        <option value="nobita">nobita</option>
                    </select>
                </label>

                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;