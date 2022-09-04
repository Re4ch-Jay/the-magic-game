import { Link } from "react-router-dom";
const GameList = ({data}) => {
    return ( 
        <div className="blog-list">
             {data.map(data => (
                <div key={data.id} className='blog-preview'>
                    <Link to={`/blogs/${data.id}`}>
                        <h2>{data.title}</h2>
                        <p>{data.author}</p>
                    </Link>                 
                </div>
            ))}
        </div>
     );
}
 
export default GameList;