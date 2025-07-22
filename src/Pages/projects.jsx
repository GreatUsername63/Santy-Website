import { useEffect, useState } from "react"

import { projectData } from '../data/projectData.js'
import ProjectAside from "../components/projectAside.jsx"
import ProjectInfo from "../components/projectInfo.jsx"

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
        setSelectedProject(projectData[0])
    }, [])

    return (
        <>
            <ProjectAside projectData={projectData} />
            <ProjectInfo project={selectedProject} />
        </>
    )
}

export default App