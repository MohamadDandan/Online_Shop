import React, { useState ,Component} from "react";
import {Link} from 'react-router-dom';
import "./App.css";
import Slider from "./RegSlider"
import RegisterForm from "./RegisterForm"
function Register(){
    return(
        <div style={{position:"relative"}}>
        <div className="slideshow-container2" >
        <div className="centered" >
            <Slider  ></Slider>
        
        </div>
        <div  className="centered2" ><RegisterForm/></div>
        </div>
        
        </div>
    );
}
export default Register;