import * as Icons from 'react-bootstrap-icons'
import styles from '../styles/projects.module.css'

export default function ProjectAside({ projectData }) {
    return (
        <aside className={styles.aside}>
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
        </aside>
    )
}