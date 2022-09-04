
import GameList from "./GameList";
import useFetch from "./useFetch";

const Home = () => {
    const {data, error, isPending} = useFetch('http://localhost:9000/blogs')
    return ( 
        <div className="home">
            <h1>All Games</h1>
            {isPending && <div> Loading.... </div>}
            {error && <div>{error} </div>}
            {data && <GameList data={data}/>}
        </div>
     );
}
 
export default Home;