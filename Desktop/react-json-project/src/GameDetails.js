import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const GameDetails = () => {
    const {id} = useParams()
    const {error, isPending, data} = useFetch('http://localhost:9000/blogs/' + id)
    const navigate = useNavigate();
    const handleDelete = () => {
        fetch('http://localhost:9000/blogs/' + id, {
            method: "DELETE",
        }).then(()=> {
            navigate('/')
        })
    }
    return ( 
        <div className="blog-details">
            <h1>All game in details</h1>
           {isPending && <div>Loading...</div>}
           {error && <div>{error}</div>}
           {data && 
           <div>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
                <p>Developer: {data.author}</p>
                <p>Date: {data.date}</p>
                <button onClick={handleDelete}>Delete</button>
            </div>}
        </div>
     );
}
 
export default GameDetails;