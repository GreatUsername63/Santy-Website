import styles from '../styles/projects.module.css'
import { getUrl, getImgUrl } from '../utils/urlFunctions'

export default function ProjectInfo({ project }) {
    return (
        <div className={styles.mainContainer}>
            <h1>{project.name}</h1>
            <p>{project.role}</p>
            <img src={getImgUrl(project.image)}></img>
            <ul>
                {
                    project.texts.map((text, index) => (
                        <li key={index}>{text}</li>
                    ))
                }
            </ul>
            {
                project.links.map((link, index) => (
                    <a key={index} href={getUrl(link.url)} target="_blank">[[[{link.name}]]]</a>
                ))
            }
        </div >
    )
}