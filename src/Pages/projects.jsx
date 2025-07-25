import { useEffect, useState } from "react"

import { projectData } from '../data/projectData.js'
import ProjectAside from "../components/projectAside.jsx"
import ProjectInfo from "../components/projectInfo.jsx"

import { motion } from "motion/react"

function Projects() {
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

    function handleItemPull(index) {
        setSelectedProject(projectData[index])
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <ProjectAside projectData={projectData} handleItemPull={handleItemPull} />
            <ProjectInfo project={selectedProject} />
        </motion.div>
    )
}

export default Projects