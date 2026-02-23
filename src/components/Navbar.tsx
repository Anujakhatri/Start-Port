import { useState } from 'react';
import './Navbar.css';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#home" className="nav-link" onClick={toggleMenu}>HOME</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link" onClick={toggleMenu}>ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link" onClick={toggleMenu}>CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}