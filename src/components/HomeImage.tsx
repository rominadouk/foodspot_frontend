import React from "react";
import './HomeImage.css'
import './Navbar.css'
const ramenImage = require('../assets/ramen2.jpg')

const HomeImage = () => {
    return (
        <>
        <div className='home-image'>
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#"><span className="home-nav brand-nav-name">FOODSPOT</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto nav-links">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><span className="home-nav">HOME</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><span className="home-nav">FIND A SPOT</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><span className="home-nav">SAVED SPOTS</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
        {/* <div id='home-image'>
            <img id='ramen' src={ramenImage} alt="Ramen" />
        </div> */}
        </>
     );
}
 
export default HomeImage;
