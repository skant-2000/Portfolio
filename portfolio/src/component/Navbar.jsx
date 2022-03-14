import React from "react";
import styles from "../style/navbar.module.css"
import { HashLink as Link } from "react-router-hash-link"

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <Link style={{textDecoration: "none", color: "#082032"}} to="#home" smooth>Home</Link>
        <Link style={{textDecoration: "none", color: "#082032"}} to="#about" smooth>About</Link>
        <Link style={{textDecoration: "none", color: "#082032"}} to="#projects" smooth>Projects</Link>
        <Link style={{textDecoration: "none", color: "#082032"}} to="#contact" smooth>Contact</Link>
      </div>
    </div>
  );
}
