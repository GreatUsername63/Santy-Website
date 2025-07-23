import { motion, useMotionValue, useTransform } from 'motion/react'
import styles from '../styles/projectAside.module.css'

export default function ProjectAsideButton({ project }) {
    const x = useMotionValue(0)
    const projectNameOffset = useTransform(() => -x.get())

    return (
        <motion.div
            className={styles.projectButton}
            drag={"x"}
            style={{ x }}>
            <motion.p style={{ x: projectNameOffset }}>{project.name}</motion.p>
            <p>{project.year}</p>
        </motion.div>
    )
}