import { useEffect, useState } from "react"
import styles from '../styles/projects.module.css'
import * as Icons from 'react-bootstrap-icons'
import { projectData } from '../data/projectData.js'

function App() {
    const [selectedProject, setSelectedProject] = useState({
        id: -1,
        name: "Loading",
        year: "00",
        role: "Loading developer",
        image: "null",
        texts: [
            "Loading",
            "Loading"
        ],
        links: [
            {
                "id": 0,
                "name": "Loading",
                "url": "https://google.com"
            }
        ]
    })

    useEffect(() => {
        setSelectedProject(projectData[8])
    }, [])

    //why god why...
    function getImgUrl(name) {
        return new URL(`${name}`, import.meta.url).href
    }

    function getUrl(name) {
        return new URL(name);
    }

    return (
        <>
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
            <div className={styles.mainContainer}>
                <h1>{selectedProject.name}</h1>
                <p>{selectedProject.role}</p>
                <img src={getImgUrl(selectedProject.image)}></img>
                <ul>
                    {
                        selectedProject.texts.map((text, index) => (
                            <li key={index}>{text}</li>
                        ))
                    }
                </ul>
                {
                    selectedProject.links.map((link, index) => (
                        <a key={index} href={getUrl(link.url)} target="_blank">[[[{link.name}]]]</a>
                    ))
                }
            </div >
        </>
    )
}

export default App