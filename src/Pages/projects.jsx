import { useEffect, useState } from "react"
import styles from '../styles/projects.module.css'
import * as Icons from 'react-bootstrap-icons'

import placeholderImage from '../assets/imagen 1.png'

function App() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('../../public/data/projectData.json')
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error('Error loading json: ', err))
    }, [])

    return (
        <>
            <aside className={styles.aside}>
                <div className={styles.asideHeaderContainer}>
                    <Icons.ArrowLeft size={50} />
                    <h2>Projects</h2>
                </div>
                <div className={styles.buttonContainer}>
                    {
                        projects.map((project) => (
                            <div className={styles.projectButton}>
                                <p>{project.name}</p>
                                <p>{project.year}</p>
                            </div>
                        ))
                    }
                </div>
            </aside>
            <div className={styles.mainContainer}>
                <h1>2D DODGER</h1>
                <p>Solo Lua developer</p>
                <img src={placeholderImage}></img>
                <ul>
                    <li>Simple game about avoiding rocks using two spaceships placed in the vertical and horizontal axis. Done in approximately one day.</li>
                    <li>Used object oriented programming in a limited system with dictionaries and collision algorithms.</li>
                    <li>Used Lua and Pico-8.</li>
                </ul>
                <a href="google.com">[[[Game Link]]]</a>
                <a href="google.com">[[[Github Link]]]</a>
            </div>
        </>
    )
}

export default App