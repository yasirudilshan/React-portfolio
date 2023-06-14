import "../Styles/typedAnimation.css";

import React from 'react'
const text=document.querySelector(".sec-text");
const textLoad=()=>{
    setTimeout(()=>{
        text.textContent="freelancer";
    },0);
    setTimeout(()=>{
        text.textContent="blogger";
    },4000);
    setTimeout(()=>{
        text.textContent="Youtuber";
    },8000);
}

function TypedAnimation() {
  return (
    <div>
      <div class="container">
        <span class="text first-text">I'm a</span>
        <span class="text sec-text">Freelancer</span>
      </div>
      <script>
        {textLoad}
      </script>
    </div>
  )
}

export default TypedAnimation
