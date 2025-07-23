import { motion, useMotionValue, useTransform } from 'motion/react'
import styles from '../styles/projectAside.module.css'
import useWindowDimensions from '../utils/useWindowDimensions';

export default function ProjectAsideButton({ project }) {
    const viewWidth = useWindowDimensions().width;
    const x = useMotionValue(0)
    const projectNameOffset = useTransform(() => {
        if (x.get() > 0) {
            return -x.get()
        } else {
            return 0;
        }
    })

    return (
        <motion.div
            className={styles.projectButton}
            drag={"x"}
            dragConstraints={{ left: 0, right: 0.02 * viewWidth }}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 15 }}
            style={{ x }}>
            <motion.p style={{ x: projectNameOffset }}>{project.name}</motion.p>
            <p>{project.year}</p>
        </motion.div>
    )
}