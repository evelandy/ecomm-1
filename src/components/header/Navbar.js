import React from 'react';
import '../styles/navbar.css';
import {
    NavLink
} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="is-flex is-justify-content-space-evenly navbarNav">
            <span>
                <NavLink to="/builds" className="navbarLink">Builds</NavLink>
                <span className="dropdown is-hoverable">
                    <button className="button is-small navbarDropdown" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </button>
                    <span className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <span className="dropdown-content">
                            <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                        </span>
                    </span>
                </span>
            </span>
            <span>
                <NavLink to="/parts" className="navbarLink">Parts</NavLink>
                <span className="dropdown is-hoverable">
                    <button className="button is-small navbarDropdown" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </button>
                    <span className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <span className="dropdown-content">
                            <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                        </span>
                    </span>
                </span>
            </span>
            <span>
                <NavLink to="/services" className="navbarLink">Services</NavLink>
                <span className="dropdown is-hoverable">
                    <button className="button is-small navbarDropdown" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </button>
                    <span className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <span className="dropdown-content">
                            <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                        </span>
                    </span>
                </span>
            </span>
        </nav>
    );
}
