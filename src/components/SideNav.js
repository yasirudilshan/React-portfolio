import React from "react";
import "../Styles/sidenav.css";
import "../Styles/section.css";
import { SlHome,SlPhone,SlBookOpen } from "react-icons/sl";
import { RxPerson } from "react-icons/rx";



function SideNav() {
  return (
    <div id="mySidenav" class="sidenav">

<span class="icon"><i class="fa fa-home"></i></span>
      <a href="#" id="about" >
            <span class="icon"><SlHome /></span>
            <span class="text">Home</span>
      </a>
      <a href="#section1" id="blog">
            <span class="icon"><RxPerson /></span>
            <span class="text">Me</span>
      </a>
      <a href="#section2" id="projects">
            <span class="icon"><SlBookOpen /></span>
            <span class="text">projects</span>
      </a>
      <a href="#section3" id="contact">
            <span class="icon"><SlPhone /></span>
            <span class="text">contact</span>
      </a>

    </div>
  );
}

export default SideNav;
