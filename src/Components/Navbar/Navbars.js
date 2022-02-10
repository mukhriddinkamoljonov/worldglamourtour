import React from 'react';
import './Navbar.css'
import  "../icon/photo_2022-02-09_15-30-46.jpg"


function Navbars() {
    const open = () => {

    }
    return (
        <div>
            <div className="menu-toggle" onClick={open} id="hamburger">
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