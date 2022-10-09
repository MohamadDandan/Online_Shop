import React, { useState,Component } from "react";
import "./App.css";
import { FaUser,FaKey } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';

function SignIn() {
    

    return(
        
        <div >
            <div style={{width:"100%",padding: "80px 0px"}}>
                <form method="post" action="test.html" autocomplete="on">
                    <div className="input-container">
                    <a className="icon"><FaUser /></a>
                        <input className="input-field" type="text" placeholder="username" name="user"></input>
                    </div>
                    <div className="input-container">
                        <a className="icon"><FaKey /></a>
                        <input className="input-field" type="password" placeholder="password" name="pass"></input>
                    </div>
                    <button type="submit" className="btn">Login</button>
                </form>
            </div> 
        </div>
    );
}
export default SignIn;