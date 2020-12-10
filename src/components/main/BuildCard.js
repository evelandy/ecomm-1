import React from 'react';
import '../styles/builds.css';
import build from '../images/build.jpg';

export default function BuildCard() {
    return (
        <div className="buildCardContainer">
            <h2>
                Title
            </h2>
            <p>
                Complete Gaming Build with Keyboard Monitor Mouse and headphones
            </p>
            <img src={build} alt='build'/>
            <span>
                $price
            </span>
            <div>
                <button>add</button>
                <button>view</button>
            </div>
        </div>
    );
}
