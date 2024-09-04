import {Link, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home.jsx"
import BookList from "./pages/Booklist"
import Book from "./pages/Book"
function App() {

  return (
    <>
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
        <Route path="/books" element={<BookList/>}/>
        <Route path="/books/:id" element={<Book/>}/>
      </Routes>
    </>
  )
}

export default App
