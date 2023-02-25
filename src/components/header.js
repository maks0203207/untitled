import React from 'react';
import oval from "./../assets/img/OVAL.svg"
import vector from "./../assets/img/Vector.svg"

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                   <h1>UI.desk</h1>

                    <div className="nav">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Testimonials</a>
                    </div>

                    <div className="buttons">
                        <img src={oval} alt={oval}/>
                        <button>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;