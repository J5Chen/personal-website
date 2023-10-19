import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projects = () => {
    return (
        <nav>
            <ul>
                <li><a href="https://github.com/J5Chen" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} />Github</a></li>
                <li><a href="https://j5chen.github.io/pokemon-mem-game/" rel="noreferrer" target="_blank">Pokemon Memory Game</a></li>
            </ul>
        </nav>
    )
}

export default Projects;