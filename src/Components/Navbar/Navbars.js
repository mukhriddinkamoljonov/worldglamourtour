import React from 'react';
import 'Navbar.css'

function Navbars() {
    return (
        <div>
            <div className="menu-toggle" id="hamburger">
                <i className="fas fa-bars"></i>
            </div>
            <div className="overlay"></div>
            <div className="container">
                <nav>
                    <h1 className="brand"><a href="index.html">Br<span>a</span>nd</a></h1>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbars;