import "../Styles/nav.css";
import { MyComponent } from "./Typing";
import YasiruDilshan from '../assets/YasiruDilshan.pdf'

import React from "react";

function Nav() {
  return (
    <div>
      <header>
        <a href="" class="logo">
          
        </a>
        <nav class="navbar">
          {/* <a href="" class="active">
            Home
          </a> */}
          <a href={YasiruDilshan} download="Yasiru's Resume" target='_blank'>Download CV</a>
          {/* <a href="">Portfolio</a>
          <a href="">Contact</a> */}
        </nav>
      </header>
      
    </div>
  );
}

export default Nav;
