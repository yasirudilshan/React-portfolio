import React from 'react'
import "../Styles/contactsection.css";
import { AiOutlineMail ,AiFillGithub} from "react-icons/ai";
import { BsLinkedin,BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";

function ContactSection() {
  return (
    <div>
      <text className='heading'>Contact Me</text>
      <div className='contact-items'>
          <div className='contact-email'><HiOutlineMailOpen className='icon'/> <div className='name'>Email</div><div className='link'>Dilshan.yd4c6@gmail.com</div></div>
          <div className='contact-tele'><BsFillTelephoneFill className='icon'/> <div className='name'>Telephone</div><div className='link'>071 0634830</div></div>
          <div className='contact-in'><BsLinkedin className='icon'/> <div className='name'>LinkedIn</div><a href='https://www.linkedin.com/in/ydgamage' className='link' target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/ydgamage</a></div>
          <div className='contact-git'><AiFillGithub className='icon'/> <div className='name'>Git hub</div><a href='https://github.com/yasirudilshan' className='link' target="_blank" rel="noopener noreferrer">https://github.com/yasirudilshan</a></div>
      </div>
    </div>
  )
}

export default ContactSection
