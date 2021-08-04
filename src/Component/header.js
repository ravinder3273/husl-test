import React from 'react'
import LOGO from '../Images/Logo.png'
import HEADER from '../Images/Group 88.png'
import DOTS from '../Images/dots.png'
import Dots2 from '../Images/dots.png'



function header() {

    const clicked = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "header") {
            x.className += " responsive";
        } else {
            x.className = "header";
        }
    }


    return (
        <div className="main_header">
            <div className="header" id="myTopnav">
                <a href="#default" className="logo"><img src={LOGO} alt="f" /></a>
                <div className="toggle-nav">
                    <button className="btn"><i className="fa fa-download"></i> Download</button>
                    <a href="#1" className="icon " onClick={clicked}>
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
                <ul className="nav-bar-custom">
                <img src={DOTS} class="dots" alt="dots"/>
                    <li className="active">
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#contact">How It Works</a>
                    </li>
                    <li>
                        <a href="#about">Our Features</a>
                    </li>
                    <li className="d-none-mobile">
                        <a href="#about"><button className="btn"><i className="fa fa-download"></i> Download</button></a>
                    </li>
                </ul>
            </div>
            <div className="Container">
                <div className="first">
                    <h1>Why Do We Use It</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <form className="form">
                        <label>
                            <input type="text" name="remember" placeholder="Email Address" />
                        </label>
                        <button type="submit">SUBMIT</button>
                    </form>  
                    <img src={Dots2} class="dots2" alt=""/>  
                </div>
                    
                <div className="second">
                    <img src={HEADER} class="png" alt="hh" />
                </div>
            </div>
        </div>
    )
}
export default header
