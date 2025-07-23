import autoretrato from '../assets/08_05_24 autoretrato chistoso 1.png'
import styles from "../styles/index.module.css"
import { Link } from "react-router-dom"

import { motion, scale } from 'motion/react'
import CustomMotionComponent from '../utils/customMotionComponent'

function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <aside className={styles.mainAside}>
        <h1>Hi!</h1>
        <p>My name is Santiago Ramírez Enríquez, a junior software engineer and aspirant video game programmer.
          I'm passionate for programming fun and interesting experiences that people can enjoy.</p>
        <div className={styles.buttonContainer}>
          <CustomMotionComponent
            as={Link}
            className={`${styles.indexButton} ${styles.pinkButton}`}
            to={"/projects"}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
            Projects
          </CustomMotionComponent>
          <CustomMotionComponent
            as={Link}
            className={`${styles.indexButton} ${styles.blueButton}`}
            to={"/education"}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
            Education
          </CustomMotionComponent>
        </div>

      </aside>
      <div className={styles.mainImageContainer}>
        <img src={autoretrato}></img>
      </div>

    </motion.div>
  )
}

export default Index
