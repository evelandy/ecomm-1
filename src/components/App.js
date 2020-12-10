import React from 'react';
import './styles/app.css';
import {
    BrowserRouter as Router,
    Switch, 
    Route
} from 'react-router-dom';
import Banner from './header/Banner';
import NavContainer from './header/NavContainer';
import FeaturedBuilds from './main/FeaturedBuilds';

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
                </div>
            </div>
        </Router>
    );
}
