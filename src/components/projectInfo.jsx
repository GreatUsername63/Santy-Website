import styles from '../styles/projectInfo.module.css'
import { getUrl, getImgUrl } from '../utils/urlFunctions'

function ProjectImage({ src }) {
    if (src == null) {
        return null
    }
    return <img src={getImgUrl(src)}></img>
}

function ProjectLinks({ links }) {
    if (links == null) {
        return null
    }
    return (
        links.map((link, index) => (
            <a key={index} href={getUrl(link.url)} target="_blank">[[[{link.name}]]]</a>
        )))
}

export default function ProjectInfo({ project }) {
    return (
        <div className={styles.mainContainer}>
            <h1>{project.name}</h1>
            <p>{project.role}</p>
            <ProjectImage src={project.image} />
            <ul>
                {
                    project.texts.map((text, index) => (
                        <li key={index}>{text}</li>
                    ))
                }
            </ul>
            <ProjectLinks links={project.links} />
        </div >
    )
}