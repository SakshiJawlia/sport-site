import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import BookSlot from "./pages/BookSlot/BookSlot"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='book_slot' element={<BookSlot/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='about' element={<About/>}></Route>
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
