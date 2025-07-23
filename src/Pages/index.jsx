import autoretrato from '../assets/08_05_24 autoretrato chistoso 1.png'
import styles from "../styles/index.module.css"
import { Link } from "react-router-dom"

function Index() {
  return (
    <>
      <aside className={styles.mainAside}>
        <h1>Hi!</h1>
        <p>My name is Santiago Ramírez Enríquez, a junior software engineer and aspirant video game programmer.
          I'm passionate for programming fun and interesting experiences that people can enjoy.</p>
        <div className={styles.buttonContainer}>
          <Link className={`${styles.indexButton} ${styles.pinkButton}`} to={"/projects"}>Projects</Link>
          <Link className={`${styles.indexButton} ${styles.blueButton}`} to={"/education"}>Education</Link>
        </div>

      </aside>
      <div className={styles.mainImageContainer}>
        <img src={autoretrato}></img>
      </div>

    </>
  )
}

export default Index
