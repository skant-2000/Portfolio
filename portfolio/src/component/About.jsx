import React from "react";
import styles from "../style/about.module.css";
import myPic from "../media/suryakant.png";
import html5 from "../media/html5.png";
import css3 from "../media/css3.png";
import javascript from "../media/javascript.png";
import react from "../media/react.png";
import nodejs from "../media/nodejs.png";
import mongodb from "../media/mongodb.png";
import express from "../media/express.png";

export default function About() {
    return (
        <div className={styles.about} id="about">
            <div>ABOUT</div>
            <div>
                <div>
                    <img src={myPic} alt="" />
                    <p>
                        Aspiring full-stack web developer at Masai School. Have worked on 4
                        collaborative projects. Learning from the project was to collaborate
                        with the Team.
                    </p>
                    <a href="https://drive.google.com/file/d/1tJSs7Q7nAKaW8JLgINpwjdmy_H_vrAUS/view?usp=sharing"><button>Resume</button></a>
                </div>
                <div>
                    <div>Skills</div>
                    <div>
                        <div>
                            <img src={html5} alt="" />
                            <p>HTML</p>
                        </div>
                        <div>
                            <img src={css3} alt="" />
                            <p>CSS</p>
                        </div>
                        <div>
                            <img src={javascript} alt="" />
                            <p>JavaScript</p>
                        </div>
                        <div>
                            <img src={react} alt="" />
                            <p>React</p>
                        </div>
                        <div>
                            <img src={nodejs} alt="" />
                            <p>Node.js</p>
                        </div>
                        <div>
                            <img src={mongodb} alt="" />
                            <p>MongoDB</p>
                        </div>
                        <div>
                            <img src={express} alt="" />
                            <p>Express.js</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
