import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateBlog from "./CreateBlog";
import NotFound from "./NotFound";
import GameDetails from "./GameDetails";
function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<CreateBlog/>}/>
            <Route path='/blogs/:id' element={<GameDetails/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
