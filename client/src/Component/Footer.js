import React, { useState } from "react";
import { FaFacebook,FaTwitter,FaInstagramSquare,FaYoutube } from 'react-icons/fa';
import {RiInstagramFill}from 'react-icons/ri'
function Footer() {
  
    const [darkmode, setdark]=useState(true);
    return(
        <div>
            <div>
                <a><a>All rights reserved - K O T O - 2021</a> </a>
            </div>
        <div >
           
           <a className="iconStyle facebook"> <FaFacebook /></a>
           <a className="iconStyle twitter"> <FaTwitter /></a>
           <a className="iconStyle youtube"> <FaYoutube /></a>
        </div>
        </div>
    );
}
export default Footer;
