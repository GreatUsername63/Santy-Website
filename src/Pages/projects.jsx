import { useEffect, useState } from "react"
import styles from '../styles/projects.module.css'
import * as Icons from 'react-bootstrap-icons'

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
        </>
    )
}

export default App