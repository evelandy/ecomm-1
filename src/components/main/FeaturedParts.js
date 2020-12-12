import React from 'react';
import PartCard from './PartCard';
import '../styles/parts.css';
import ssd from '../images/ssd.jpg';
import intelCPU from '../images/intelCPU.jpg';
import amdCPU from '../images/amdCPU.jpg';
import aorus from '../images/aorus.jpg';

export default function FeaturedParts() {
    return (
        <div className="featuredPartsContainer">
            <div className="featuredPartsSubContainer">
                <h2 className="featuredPartsTitle">Featured Parts</h2>
                <p className="featuredPartsAll">see all</p>
            </div>
            <span className="featuredPartsCardContainer">
                <PartCard 
                    name={"NVME SSD"} 
                    type_desc={"1TB NVME M.2 SSD"} 
                    price={"129.99"}
                    id={"1111"}
                    build={ssd}
                />
                <PartCard 
                    name={"Intel 10900k"} 
                    type_desc={"Intel 10900k Core i9 CPU"} 
                    price={"595.99"} 
                    id={"1112"}
                    build={intelCPU}
                />
                <PartCard 
                    name={"AMD ThreadRipper 3970x"} 
                    type_desc={"AMD ThreadRipper 3970x 32 core CPU"} 
                    price={"2199.99"} 
                    id={"1113"}
                    build={amdCPU}
                />
                <PartCard 
                    name={"Aorus z390 Master"} 
                    type_desc={"Aorus z390 Master Motherboard"} 
                    price={"449.99"} 
                    id={"1114"}
                    build={aorus}
                />
            </span>
        </div>
    );
}
