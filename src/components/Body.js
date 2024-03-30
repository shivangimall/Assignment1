import "./Body.css"
import PropertyCard from "./PropertyCard";
import { useState } from "react";

const Body = ()=>{
  const [displayCount, setDisplayCount] = useState(4);
    const ListOfProperty = 
        [
            {
              "Name": "RIVERSIDER CRESCENT",
              "Description": "This Better Than New Former Model Has Been Recently Upgraded And Is Move In Ready",
              "Location": "Gomti Nagar Sector-9 Lucknow Enclave City",
              "SquareArea": "402 sq.ft",
              "Status": "Ready to move",
              "NumberOfBedrooms": 3,
              "NumberOfBathrooms": 3,
              "image":"Property1.png",
            },
            {
                "Name": "Hilltop Retreat",
                "Description": "A serene getaway nestled in the rolling hills, offering panoramic views and tranquility.",
                "Location": "123 Mountain View Drive, Boulder, Colorado",
                "SquareArea": "2500 sq.ft",
                "Status": "Available for sale",
                "NumberOfBedrooms": 4,
                "NumberOfBathrooms": 3,
                "image":"Property2.png",
              },
              {
                "Name": "Beachfront Bliss",
                "Description": "Experience coastal living at its finest with this luxurious beachfront property.",
                "Location": "789 Ocean Avenue, Malibu, California",
                "SquareArea": "3500 sq.ft",
                "Status": "For rent",
                "NumberOfBedrooms": 5,
                "NumberOfBathrooms": 4,
                "image":"Property3.png",
              },
              {
                "Name": "Cozy Cottage",
                "Description": "Quaint cottage nestled in a wooded area, perfect for a weekend retreat.",
                "Location": "456 Forest Lane, Asheville, North Carolina",
                "SquareArea": "1200 sq.ft",
                "Status": "Under renovation",
                "NumberOfBedrooms": 2,
                "NumberOfBathrooms": 1,
                "image":"Property4.png",
              },
              {
                "Name": "Modern Urban Loft",
                "Description": "Sleek and stylish loft in the heart of the city, with stunning city views.",
                "Location": "101 Main Street, New York, New York",
                "SquareArea": "1800 sq.ft",
                "Status": "For sale",
                "NumberOfBedrooms": 3,
                "NumberOfBathrooms": 2,
                "image":"Property5.png",
              },
              {
                "Name": "Lakeview Haven",
                "Description": "Tranquil lakeside retreat with breathtaking views and modern amenities.",
                "Location": "555 Lakeview Drive, Seattle, Washington",
                "Square Area": "2800 sq.ft",
                "Status": "Available",
                "NumberOfBedrooms": 4,
                "NumberOfBathrooms": 3,
                "image":"Property6.png",
              },
              {
                "Name": "Mountain Hideaway",
                "Description": "Escape to the mountains with this secluded cabin surrounded by nature.",
                "Location": "789 Summit Trail, Aspen, Colorado",
                "SquareArea": "2000 sq.ft",
                "Status": "Vacation rental",
                "NumberOfBedrooms": 3,
                "NumberOfBathrooms": 2,
                "image":"Property1.png",
              },
              {
                "Name": "City Chic Condo",
                "Description": "Chic and modern condo in the heart of downtown, close to all amenities.",
                "Location": "321 Downtown Avenue, San Francisco, California",
                "SquareArea": "1500 sq.ft",
                "Status": "For sale",
                "NumberOfBedrooms": 2,
                "NumberOfBathrooms": 2,
                "image":"Property2.png",
              },
              {
                "Name": "Country Estate",
                "Description": "Sprawling estate set on acres of lush countryside, offering luxury living at its finest.",
                "Location": "123 Country Lane, Nashville, Tennessee",
                "SquareArea": "5000 sq.ft",
                "Status": "Available",
                "NumberOfBedrooms": 6,
                "NumberOfBathrooms": 5,
                "image":"Property3.png",
              },
              {
                "Name": "Seaside Sanctuary",
                "Description": "Your own private paradise by the sea, complete with stunning ocean views.",
                "Location": "101 Beachfront Drive, Santa Barbara, California",
                "SquareArea": "4000 sq.ft",
                "Status": "For rent",
                "NumberOfBedrooms": 4,
                "NumberOfBathrooms": 4,
                "image":"Property4.png",
              },
              {
                "Name": "Garden Oasis",
                "Description": "Tranquil oasis in the city, with lush gardens and a peaceful atmosphere.",
                "Location": "789 Garden Street, Portland, Oregon",
                "SquareArea": "2200 sq.ft",
                "Status": "Available for sale",
                "NumberOfBedrooms": 3,
                "NumberOfBathrooms": 2,
                "image":"Property5.png",
              },
              {
                "Name": "Ski Chalet",
                "Description": "Charming chalet nestled in the mountains, perfect for winter getaways.",
                "Location": "456 Ski Run Road, Lake Tahoe, California",
                "SquareArea": "1800 sq.ft",
                "Status": "Vacation rental",
                "NumberOfBedrooms": 3,
                "NumberOfBathrooms": 2,
                "image":"Property6.png",
              },
              {
                "Name": "Downtown Penthouse",
                "Description": "Luxurious penthouse in the heart of downtown, offering unparalleled city views.",
                "Location": "101 Penthouse Plaza, Chicago, Illinois",
                "SquareArea": "3000 sq.ft",
                "Status": "For sale",
                "NumberOfBedrooms": 3,
                "NumberOfBathrooms": 3,
                "image":"Property1.png",
              },
              {
                "Name": "Rural Retreat",
                "Description": "Escape the hustle and bustle with this charming farmhouse in the countryside.",
                "Location": "789 Rural Road, Austin, Texas",
                "SquareArea": "2500 sq.ft",
                "Status": "Available",
                "NumberOfBedrooms": 4,
                "NumberOfBathrooms": 2,
                "image":"Property2.png",
              },
              {
                "Name": "Luxury Villa",
                "Description": "Experience luxury living with this stunning villa featuring lavish amenities.",
                "Location": "123 Luxury Lane, Miami, Florida",
                "SquareArea": "6000 sq.ft",
                "Status": "For rent",
                "NumberOfBedrooms": 7,
                "NumberOfBathrooms": 6,
                "image":"Property3.png",
              },
              {
                "Name": "Tranquil Retreat",
                "Description": "Find peace and tranquility in this secluded retreat surrounded by nature.",
                "Location": "101 Serenity Road, Sedona, Arizona",
                "SquareArea": "1800 sq.ft",
                "Status": "Available for sale",
                "NumberOfBedrooms": 2,
                "NumberOfBathrooms": 2,
                "image":"Property4.png",
              },
              {
                "Name": "Elegant Manor",
                "Description": "Elegant manor with timeless charm and sophistication, perfect for entertaining.",
                "Location": "456 Manor Lane, Charleston, South Carolina",
                "SquareArea": "4000 sq.ft",
                "Status": "For sale",
                "NumberOfBedrooms": 5,
                "NumberOfBathrooms": 4,
                "image":"Property5.png",
              },
              {
                "Name": "Sunny Bungalow",
                "Description": "Charming bungalow with plenty of natural light and cozy atmosphere.",
                "Location": "789 Sunshine Avenue, Santa Fe, New Mexico",
                "SquareArea": "4000 sq.ft",
                "Status": "For sale",
                "NumberOfBedrooms": 5,
                "NumberOfBathrooms": 4,
                "image":"Property6.png",
              },
              
         
    ];
    const handleViewMore = () => {
    
      setDisplayCount(displayCount + 4);
  };

  return (
      <div className="body">
          <h1>Experience a luxurious lifestyle</h1>
          <div className="details">
             
              {ListOfProperty.slice(0, displayCount).map((property, index) => (
                  <PropertyCard key={index} property={property} />
              ))}
          </div>
       
          {displayCount < ListOfProperty.length && (
              <button onClick={handleViewMore} className="view-more-button">View More</button>
          )}
      </div>
  );
}

export default Body;