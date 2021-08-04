import React from 'react'
import LOGO from '../Images/Logo.png';
import RIGHTICON from '../Images/right.svg';


const footer = () => {
    return (
        <div className="footer">
            <div className="footer_head">
               <div className="Never">
                    <h3><b>NEVER MISS A BEAT !</b></h3>
                    <p>Get news, insights, and tips sent right to your inbox.</p>
               </div>
                <div className="Never1">
                    <img src={RIGHTICON} alt="icon"/>
                </div>
                <div className="Never2">
                    <div class="btn-group">
                        <input type="text" placeholder="Enter address"/>
                        <button>Subscribe!</button>
                    </div>
                </div>
            </div>
            <div className="row1">
                <div class="row">
                <img src={LOGO} className="righticon" alt=""/>
                    <a></a>
                    <i className="fa fa-facebook-f"></i>
                    <i className="fa fa-instagram"></i>
                    </div>
                    <p>Copyright © 2021. All Rights Reserved</p>
                 </div>
            </div>
            
    )
}

export default footer
