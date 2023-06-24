
import { useRef } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import "../Styles/main.css";

function Navbar() {
    const navRef=useRef();

    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav");
        
    }
  return (
    <div>
      <header>
        <div class="logo">Logo</div>
        <nav ref={navRef}>
            <a href='#'>Home</a>
            <a href='#'>My Works</a>
            <a href='#'>Blogs</a>
            <a href='#'>About</a>
            <a href='#'><i class='fab fa-linkedin'></i></a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>
      </header>
    </div>
  )
}

export default Navbar
