import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FaVectorSquare } from "react-icons/fa6";
import { PiBuildings } from "react-icons/pi";
import { MdOutlineBedroomChild } from "react-icons/md";
import { BiRightArrowAlt } from "react-icons/bi";

import { GiBathtub } from "react-icons/gi";
import './PropertyCard.css';

const PropertyCard = ({property}) => {
    const {Name,Description,Location,SquareArea,Status,NumberOfBedrooms,NumberOfBathrooms,image} = property;
    
    return (
        <div className="property-card-container">
            <div className='property-image'>
            <img src={require(`../assest/${image}`)}alt="property-img" />
            </div>
            <div className="property-details">
                <div className="property-title">
                    {Name}
                </div>
                <div className="property-description">
                    {Description}
                </div>
                <div className="location">
                   
                    <IoLocationOutline />
                  
                    <span className="location-text">
                       {Location}
                    </span>
                </div>
                <div className="property-features">
                    <div className="property-feature">
                        <div className="carbonarea-39">
                        <FaVectorSquare />
                        </div>
                        <div className="feature-detail">
                            <span className="feature-name">Super Area</span>
                            <span className="feature-value">{SquareArea}</span>
                        </div>
                    </div>
                    <div className="property-feature">
                        <div className="tabler-buildings-building-skyscraper-45">
                        <PiBuildings />
                        </div>
                        <div className="feature-detail">
                            <span className="feature-name">Status</span>
                            <span className="feature-value">{Status}</span>
                        </div>
                    </div>
                    <div className="property-feature">
                        <div className="tabler-map-bed-50">
                        <MdOutlineBedroomChild />
                        </div>
                        <div className="feature-detail">
                            <span className="feature-name">Bedroom</span>
                            <span className="feature-value">{NumberOfBedrooms}</span>
                        </div>
                    </div>
                    <div className="property-feature">
                    <GiBathtub />
                        <div className="feature-detail">
                            <span className="feature-name">Bathroom</span>
                            <span className="feature-value">{NumberOfBathrooms}</span>
                        </div>
                    </div>
                </div>
                <div className="price">
                    STARTING FROM
                </div>
                <div className="read-more-button">
                    <div>$275,000</div>
                    <div className='button-icon'>
                        <div><BiRightArrowAlt /></div>
                    
                    
                    <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard;
