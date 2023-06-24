import React from 'react'
import { MyComponent } from "./Typing";
import "../Styles/nav.css";
import "../Styles/cover.css";
import {profile} from "../Imgs/profile.png"

function Cover() {
  return (
    <div class="wrapper">
            <section class="home">
        <div class="home-content">
          <h1>Hi, I'm Yasiru Dilshan</h1>
          {/* <h3>Frontend Developer</h3> */}
          <div Style='display:flex'>
            <h3>I am a &nbsp;</h3><MyComponent />
          </div>
          <p>
            Meet Yasiru Dilshan, an ambitious and active undergraduate student
            with a passion for software development. With his exceptional
            technical skills and eagerness to learn, has become a valuable asset
            to any team works with.
          </p>
          <div class="btn-box">
            <a href="">Hire Me</a>
            <a href="">Let's Talk</a>
          </div>
        </div>
      </section>

      <div  class='profile-container'>
      <img class='profile-image' src={require('../Imgs/profile.png')} />
      <div class="rotating-circle"></div>
      </div>
    </div>
  )
}

export default Cover
