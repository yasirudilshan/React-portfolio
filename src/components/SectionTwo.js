import React from 'react'
import "../Styles/section.css";
import SideNav from './SideNav';
import ContactSection from './ContactSection';
import ProjectSection from './ProjectSection';

function SectionTwo() {
  
  return (
    
    <div>
      
    <section id="section1">Blog
    </section>
    <SideNav/>
    <section id="section2">
      <ProjectSection/>
    </section>
    <section id="section3">
    <ContactSection/>
    </section>
    
    </div>
  )
}

export default SectionTwo
