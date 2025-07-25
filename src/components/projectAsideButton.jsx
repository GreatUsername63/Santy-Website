import { motion, useAnimate, useMotionValue, useMotionValueEvent, useTransform } from 'motion/react'
import styles from '../styles/projectAside.module.css'
import useWindowDimensions from '../utils/useWindowDimensions';
import { useEffect, useState } from 'react';

export default function ProjectAsideButton({ projectIndex, activeIndex, project, onItemPull }) {
    const viewWidth = useWindowDimensions().width;
    const [scope, animate] = useAnimate()
    const x = useMotionValue(0)
    //Used to get project name position
    const projectNameOffset = useTransform(() => {
        if (x.get() > 0.33 * viewWidth) {
            return -0.33 * viewWidth;
        }
        if (x.get() > 0) {
            return -x.get()
        }
        return 0;
    })

    //Checks if this is pulled
    useMotionValueEvent(x, "change", (latest) => {
        if (latest > 0.02 * viewWidth && activeIndex != projectIndex) {
            onItemPull()
        }
    })
    //Check if this is the initially selected index
    useEffect(() => {
        if (activeIndex == projectIndex) {
            x.set(0.02 * viewWidth)
        }
    })

    //Disabling when another index is selected
    useEffect(() => {
        if (activeIndex != projectIndex) {
            animate(scope.current, { x: 0 }, { type: "spring", stiffness: 400, damping: 15 })
        }
    }, [activeIndex])

    return (
        <motion.div
            className={styles.projectButton}
            ref={scope}
            drag={"x"}
            dragConstraints={{ left: 0, right: 0.02 * viewWidth }}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 15 }}
            whileTap={{ cursor: "grabbing" }}
            style={{ x }}>
            <motion.p style={{ x: projectNameOffset }}>{project.name}</motion.p>
            <p>{project.year}</p>
        </motion.div>
    )
}