import React from 'react';
import '../styles/builds.css';
import BuildCard from './BuildCard';
import build from '../images/build.jpg';
import basicBuild from '../images/basicBuild.jpg';
import gamingBuild from '../images/gamingBuild.jpg';
import buildAndMonitor from '../images/buildAndMonitor.jpg';

export default function FeaturedBuilds() {
    return (
        <div className="featuredBuildContainer">
            <div className="featuredBuildSubContainer">
                <h2 className="featuredBuildTitle">Featured Builds</h2>
                <p className="featuredBuildAll">see all</p>
            </div>
            <span className="featuredBuildCardContainer">
                <BuildCard 
                    quality={"Good"} 
                    type_desc={"Complete Build"} 
                    price={"399.99"}
                    id={"0001"}
                    build={basicBuild}
                />
                <BuildCard 
                    quality={"Better"} 
                    type_desc={"Complete Gaming Build"} 
                    price={"499.99"} 
                    id={"0002"}
                    build={gamingBuild}
                />
                <BuildCard 
                    quality={"Best"} 
                    type_desc={"Complete Gaming Build & Monitor"} 
                    price={"599.99"} 
                    id={"0003"}
                    build={buildAndMonitor}
                />
                <BuildCard 
                    quality={"Ultimate"} 
                    type_desc={"Complete Gaming Build + Extras"} 
                    price={"799.99"} 
                    id={"0004"}
                    build={build}
                />
            </span>
        </div>
    );
}
