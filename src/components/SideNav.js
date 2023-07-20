import React from "react";
import "../Styles/sidenav.css";
import "../Styles/section.css";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { AiFillProfile,AiFillContacts } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";

function SideNav() {
  return (
    <div id="mySidenav" class="sidenav">

<span class="icon"><i class="fa fa-home"></i></span>
      <a href="#" id="about" >
            <span class="icon"><AiFillProfile /></span>
            <span class="text">Home</span>
      </a>
      <a href="#section2" id="blog">
            <span class="icon"><GrProjects /></span>
            <span class="text">blog</span>
      </a>
      <a href="#section1" id="projects">
            <span class="icon"><FaHeart /></span>
            <span class="text">projects</span>
      </a>
      <a href="#section3" id="contact">
            <span class="icon"><AiFillContacts /></span>
            <span class="text">contact</span>
      </a>

    </div>
  );
}

export default SideNav;
