const NavBar = ({ onClick }) => {

    return (
        <nav>
            <ul>
                <li id='info' className='nav-bar' onClick={onClick}>About Me</li>
                <li id='projects'className='nav-bar' onClick={onClick}>Projects</li>
                <li id='quote' className='nav-bar' onClick={onClick}>Quote of the Day</li>
                <li id='contact' className='nav-bar' onClick={onClick}>Contact Me</li>
            </ul>
        </nav>
    )
}

export default NavBar;