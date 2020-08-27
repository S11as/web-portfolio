import React from "react";
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <div className="container-fluid justify-content-between nav-wrapper">
            <div className="logo">
                Some logo
            </div>
            <nav>
                <ul>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;