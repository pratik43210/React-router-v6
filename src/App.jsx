import {Link, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home.jsx"
import NotFound from "./pages/NotFound"
import BookRoutes from './pages/BookRoutes.jsx'
function App() {

  return (
    <>
    <Routes>
      <Route path="/books" element={<h2>Extra content</h2>}/>
    </Routes>
      <ul>
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/books">Books</Link> 
        </li>
      </ul>

      <br></br>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books/*" element={<BookRoutes/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
