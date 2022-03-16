import React from 'react'
import styles from "../style/contact.module.css";
import github from "../media/github.png";
import linkedin from "../media/linkedin.png";
import email from "../media/email.png";
import { MdPlace } from "react-icons/md";

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
        <div>CONTACT</div>
        <div>
            <a target="blank" href="https://github.com/skant-2000"><img src={github} alt="" /></a>
            <a target="blank" href="https://www.linkedin.com/in/suryakant-1085b3171/"><img src={linkedin} alt="" /></a>
            <a href="mailto:suryakant2125@outlook.com"><img src={email} alt="" /></a>
        </div>
        <p><MdPlace />Bhopal, Madhya Pradesh, India</p>
        <p>Hi, I'm currently looking for full-time Software development opportunities!</p>
        <p>If you know any positions available, or if you have any questions please feel free to reach out to me.</p>
    </div> 
  )
}
