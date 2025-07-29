import { motion } from "motion/react"
import { Link } from "react-router-dom"
import * as Icons from 'react-bootstrap-icons'
import styles from '../styles/education.module.css'

function Education() {
    return (<motion.div
        className={styles.parentDiv}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Link to={"/"}><Icons.ArrowLeft size={50} /></Link>
        <div className={styles.flexContainer}>
            <img src="/itesm.svg" className={styles.itesmLogo}></img>
            <div className={styles.degreeInfo}>
                <p>B. S. Engineering in Computer Technologies, Graduated from Tecnológico de Monterrey in the year</p>
                <h2>2025</h2>
                <p>with a gpa of <b>95.55</b></p>
            </div>
            <div className={styles.tecnicalSkills}>
                <p>Tecnical skills include:</p>
                <ul>
                    <li>Python3</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>Matlab</li>
                    <li>Unix/Linux</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>Express</li>
                    <li>Arduino</li>
                    <li>Prisma</li>
                    <li>Unity Engine</li>
                    <li>Vite</li>
                    <li>Figma</li>
                    <li>Framer motion</li>
                </ul>
            </div>
        </div>
    </motion.div>)
}

export default Education