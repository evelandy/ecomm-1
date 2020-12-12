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
                    name={"Basic Build"} 
                    type_desc={"Basic business class build"} 
                    price={"299.99"}
                    id={"0001"}
                    build={basicBuild}
                />
                <BuildCard 
                    name={"Custom Build"} 
                    type_desc={"Custom gaming build"} 
                    price={"599.99"} 
                    id={"0002"}
                    build={gamingBuild}
                />
                <BuildCard 
                    name={"Custom Build With Monitor"} 
                    type_desc={"Custom gaming build & monitor"} 
                    price={"799.99"} 
                    id={"0003"}
                    build={buildAndMonitor}
                />
                <BuildCard 
                    name={"Custom Build With Extras"} 
                    type_desc={"Custom gaming build + monitor & extras"} 
                    price={"999.99"} 
                    id={"0004"}
                    build={build}
                />
            </span>
        </div>
    );
}
