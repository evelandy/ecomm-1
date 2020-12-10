import React from 'react';
import '../styles/navbar.css';
import Navbar from './Navbar';
import Toolbar from './Toolbar';

export default function NavContainer() {
    return (
        <div>
            <Toolbar />
            <Navbar />
        </div>
    );
}
