import React from 'react';
import './styles/app.css';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import Banner from './header/Banner';
import NavContainer from './header/NavContainer';
import FeaturedBuilds from './main/FeaturedBuilds';
import FeaturedParts from './main/FeaturedParts';

export default function App() {
    return (
        <Router>
            <div className="appContainer">
                <span>
                    <NavContainer />
                </span>
                <Banner />
                <div>
                    <FeaturedBuilds />
                    <FeaturedParts />
                </div>
            </div>
        </Router>
    );
}
