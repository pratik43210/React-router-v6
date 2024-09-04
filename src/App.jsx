import {Link, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import BookList from "./pages/Booklist.jsx"
import Contact from "./pages/Contact.jsx"
function App() {

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/about">About</Link> 
        </li>
        <li>
          <Link to="/booklist">BookList</Link> 
        </li>
        <li>
          <Link to="/contact">Contact</Link> 
        </li>
      </ul>

      <br></br>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/booklist" element={<BookList/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
