import { motion } from 'motion/react'
import * as Icons from 'react-bootstrap-icons'
import styles from '../styles/projects.module.css'
import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import useWindowDimensions from "../utils/useWindowDimensions"

export default function ProjectAside({ projectData }) {
    const viewHeight = useWindowDimensions().height;
    const [motionHeight, setMotionHeight] = useState(0);
    const motionRef = useRef(null);

    useEffect(() => {
        const handleAsideResize = () => {
            if (motionRef.current) {
                setMotionHeight(motionRef.current.offsetHeight)
            }
        }

        handleAsideResize();
        window.addEventListener('resize', handleAsideResize)

        return () => {
            window.removeEventListener('resize', handleAsideResize)
        }
    })

    return (
        //Constraints have -4 because of the border
        <motion.aside ref={motionRef}
            className={styles.aside}
            drag="y" initial={{ y: -4 }}
            dragConstraints={{ top: -(motionHeight - viewHeight) + 4, bottom: -4 }}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 15 }}
            whileTap={{ cursor: "grabbing" }}
        >
            <div className={styles.asideHeaderContainer}>
                <Icons.ArrowLeft size={50} />
                <h2>Projects</h2>
            </div>
            <div className={styles.buttonContainer}>
                {
                    projectData.map((project, index) => (
                        <div className={styles.projectButton} key={index}>
                            <p>{project.name}</p>
                            <p>{project.year}</p>
                        </div>
                    ))
                }
            </div>
        </motion.aside>
    )
}