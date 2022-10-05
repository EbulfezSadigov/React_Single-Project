import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import About from './pages/about'
import User from './pages/user'
import { Link } from "react-router-dom";
import Add from './pages/user/add'


function App() {

  

  return (
    <>
      <ul style={{ listStyleType: "none", display: "flex", justifyContent: 'center' }}>
        <li style={{ paddingRight: 30 }}>
          <Link to="/" style={{ textDecoration: "none", fontSize: 30 }}>Home</Link>
        </li>
        <li style={{ paddingRight: 30 }}>
          <Link to="/about" style={{ textDecoration: "none", fontSize: 30 }}>About</Link>
        </li>
        <li style={{ paddingRight: 30 }}>
          <Link to="/users" style={{ textDecoration: "none", fontSize: 30 }}>User</Link>
        </li>
        <li>
          <Link to="/add" style={{ textDecoration: "none", fontSize: 30 }}>Add</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<User />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  )
}

export default App
