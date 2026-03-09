
import './Navbar.css';

export function Navbar() {

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">&lt;Anu /&gt;</div>

                <ul className="navbar-menu">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link">PROJECTS</a>
                    </li>
                    <li className="nav-item">
                        <a href="#tech-stack" className="nav-link">TECH</a>
                    </li>
                    <li className="nav-item">
                        <a href="#experience" className="nav-link">EXPERIENCE</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}