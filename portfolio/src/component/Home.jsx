import React from 'react'
import styles from "../style/home.module.css"
import { HashLink as Link } from "react-router-hash-link"


export default function Home() {
  return (
    <div className={styles.home} id="home">
        <div>
            Hello, I'm <span style={{color: "#FF4C29"}}>Suryakant</span>.
            <br/>
            I'm a full-stack web developer.
        </div>
        <Link to="#about" smooth><button className={styles.button}>View my work</button></Link>
    </div>
  )
}
