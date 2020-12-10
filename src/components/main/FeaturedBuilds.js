import React from 'react';
import '../styles/builds.css';
import BuildCard from './BuildCard';

export default function FeaturedBuilds() {
    return (
        <div className="featuredBuildContainer">
            <div className="featuredBuildSubContainer">
                <h2 className="featuredBuildTitle">Featured Builds</h2>
                <p className="featuredBuildAll">see all</p>
            </div>
            <span className="featuredBuildCardContainer">
                <BuildCard />
                <BuildCard />
                <BuildCard />
                <BuildCard />
            </span>
        </div>
    );
}
