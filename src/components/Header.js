import React from "react";
import {Link} from "react-router-dom";

const Header = props => {
    return (
        <div className="container-fluid  nav-wrapper">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-auto">
                        <div className="logo">
                            Some logo
                        </div>
                    </div>
                    <div className="col-auto">
                        <nav className="row">
                            <Link to="/" className="col-auto">Hihi</Link>
                            <Link to="/" className="col-auto">Hihi</Link>
                            <Link to="/" className="col-auto">Hihi</Link>
                            <Link to="/" className="col-auto">Hihi</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;