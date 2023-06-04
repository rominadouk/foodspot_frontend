import React from "react";

const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">FOODSPOT</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FIND A SPOT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SAVED SPOTS</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
     );
};
 
export default Navbar;