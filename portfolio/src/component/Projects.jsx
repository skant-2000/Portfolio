import React from 'react'
import styles from "../style/projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projects} id="projects">
        <div>PROJECTS</div>
        <div>
            <div>
                <div>
                    <p>CLONE OF BRIGHTLINE</p>
                    <p>Brightline is a United State based compay which provides behavioral health care directly to families, because no one should have to get through the tough stuff alone.</p>
                </div>
                <div>
                    <a href="https://brightline.netlify.app/"><button>Project</button></a>
                    <a href="https://github.com/skant-2000/Lithium"><button>GitHub</button></a>
                </div>
                <p>HTML | CSS | JAVASCRIPT</p>
            </div>
            <div>
                <div>
                    <p>CLONE OF FRESHLY</p>
                    <p>Freshly is a New York-based prepared meal delivery company that ships one million meals per week and delivers to the contiguous United States.</p>
                </div>
                <div>
                    <a href="https://jovial-banach-4121a8.netlify.app/index.html"><button>Project</button></a>
                    <a href="https://github.com/ayush-code-drops/Freshly-Meal-Delivery-Service"><button>GitHub</button></a>
                </div>
                <p>HTML | CSS | JAVASCRIPT</p>
            </div>
            <div>
                <div>
                    <p>CLONE OF OYO</p>
                    <p>OYO is India's one of the largest network of hotels, which provids customers to stay accross the globe.</p>
                </div>
                <div>
                    <a href="https://zealous-shirley-afc987.netlify.app/"><button>Project</button></a>
                    <a href="https://github.com/jchy/OYO-Clone"><button>GitHub</button></a>
                </div>
                <p>REACT</p>
            </div>
            <div>
                <div>
                    <p>CLONE OF ZOSTEL</p>
                    <p>Zostel is one of the largest and oldest networks of hostels and homes in India. It has presence in 44 cities in India and Nepal.</p>
                </div>
                <div>
                    <a href="https://zostel-clone.netlify.app"><button>Project</button></a>
                    <a href="https://github.com/skant-2000/Project_ZOSTEL"><button>GitHub</button></a>
                </div>
                <p>REACT</p>
            </div>
        </div>
    </div>
  )
}
