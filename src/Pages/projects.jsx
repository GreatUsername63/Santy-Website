import { useEffect, useState } from "react"

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
            <aside id="project-aside">
                <div id="project-aside-header-container">
                    <h2>Projects</h2>
                </div>
                <div id="project-aside-button-container">
                    {
                        projects.map((project) => (
                            <div className="project-button">
                                <p className="p1">{project.name}</p>
                                <p className="p2">{project.year}</p>
                            </div>
                        ))
                    }
                </div>
            </aside>
        </>
    )
}

export default App