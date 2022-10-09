import React, { useState,Component ,useEffect} from "react";
import ReactDOM from 'react-dom';
import Slider from './Slider';
import TopDeal from './TopDeal';
import Trending from './Trending';
import Axios from 'axios';
import "./App.css";
import L from './images/laptops lenovo.png';
import {Link} from 'react-router-dom';
function Home() {
    

    
      
  return(
      <div style={{justifyContent:"center"}}>
            <div className="on"  ><Slider /></div>
           
            <div className="divCon"> 
            <h2>Top Deals</h2>
             <div><TopDeal/></div>
            </div>
            <div className="divCon" > 
            <h2>Trending Deals</h2>
             <div><Trending/></div>
            </div>
    
    </div>
    );
    
}
export default Home;
