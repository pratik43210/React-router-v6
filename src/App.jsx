import {Link, NavLink, Route, Routes, useLocation} from 'react-router-dom'
import Home from "./pages/Home.jsx"
import NotFound from "./pages/NotFound"
import BookRoutes from './pages/BookRoutes.jsx'
function App() {
  const location=useLocation();
  // console.log(location);

  return (
    <>
    <Routes>
      <Route path="/books" element={<h2>Extra content</h2>}/>
    </Routes>
      <ul>
        <li>
          <NavLink to="/" state="Hello">Home</NavLink> 
        </li>
        <li>
          <Link to="/books">Books</Link> 
        </li>
      </ul>

      <br/>
      <br/>
        <h3>{location.state}</h3>
      <br/>
      <br/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books/*" element={<BookRoutes/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
