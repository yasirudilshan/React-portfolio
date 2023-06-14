import "../Styles/nav.css";
import { MyComponent } from "./Typing";

import React from "react";

function Nav() {
  return (
    <div>
      <header>
        <a href="" class="logo">
          LOGO
        </a>
        <nav class="navbar">
          <a href="" class="active">
            Home
          </a>
          <a href="">About me</a>
          <a href="">Portfolio</a>
          <a href="">Contact</a>
        </nav>
      </header>
      
    </div>
  );
}

export default Nav;
