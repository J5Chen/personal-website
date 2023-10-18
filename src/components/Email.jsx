import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
const Email = () => {

    return (
        <ul>
            <li><a href="https://www.linkedin.com/in/jimmy-chen-b4730a271/"><span><FontAwesomeIcon icon={faLinkedin} /></span>Linkedin</a></li>
            <li><a href="mailto: jimmyofchen@hotmail.com"><span><FontAwesomeIcon icon={faEnvelope} /></span>Email</a></li>
        </ul>

    )

}

export default Email;
