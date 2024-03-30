import { MdWifiCalling3 } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <div className="header">
                <img src={require("../assest/Logo.png")} alt="logo" />
                <div className="right-elements">
                    <div className="search-icon"> <IoIosSearch /></div>

                    <img src={require("../assest/Vector.png")} alt="vector" />
                    <div className="flag-container">
                        <img src={require("../assest/flag.png")} alt="flag" />
                        <p>DUBAI</p>
                        <IoIosArrowDown />
                    </div>

                    <div className="earth-container">
                        <img src={require("../assest/mdi_earth.png")} alt="earth" />
                        <p>ENG</p>
                        <IoIosArrowDown />

                    </div>

                    <div className="icon-wrapper"><MdWifiCalling3 /></div>
                    <div className="icon-wrapper"><CgProfile /></div>
                    <button>Add Property</button>
                </div>

            </div>
            <div className="search">
                <div>
                    <img src={require("../assest/Buy.png")} alt="Buy" />
                    <p>BUY</p>
                    <IoIosArrowUp />
                </div>
                <div>
                    <img src={require("../assest/Sell.png")} alt="Buy" />
                    <p>SELL</p>
                    <IoIosArrowDown />
                </div>
                <div>
                    <img src={require("../assest/Rent.png")} alt="Buy" />
                    <p>RENT</p>
                    <IoIosArrowDown />
                </div>
                <div>
                    <img src={require("../assest/Featured.png")} alt="Buy" />
                    <p>Featured Property</p>

                </div>
                <div>
                    <img src={require("../assest/PropertyService.png")} alt="Buy" />
                    <p>Property Service</p>
                </div>
            </div>
            <div className="background-image">
                <img src={require("../assest/Rectangle.png")} alt="background" />
                <h1>Discover Our Featured Property</h1>
                <p>Discover our meticulously designed Properties and unlock a world of elegance and comfort that will surpass your expectation</p>
            </div>
        </div>
    )
}

export default Header;
