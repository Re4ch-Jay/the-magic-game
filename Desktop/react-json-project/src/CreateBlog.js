import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {title, body, author, date};
        fetch('http://localhost:9000/blogs', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        navigate('/')          
    }

    return ( 
        <div className="create">
            <h1>Add new games to play</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                required
                value={title}
                placeholder='Game name'
                onChange={(e) => setTitle(e.target.value)}
                />
                <textarea type="text"
                required
                value={body}
                placeholder='Game summary'
                onChange={(e) => setBody(e.target.value)}
                />
                <input type="text"
                required
                value={author}
                placeholder='Developer'
                onChange={(e) => setAuthor(e.target.value)}
                />
                <input type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
                <button>Add Game</button>
            </form>
        </div>
     );
}
 
export default CreateBlog;