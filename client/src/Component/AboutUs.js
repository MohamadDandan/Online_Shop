import Axios from 'axios';
import React, { useState,Component ,useEffect} from "react";
import {useHistory } from 'react-router-dom';
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import S3 from './images/logo.png';
function Appd(){
  

  
return(
<div  >
 
  <div draggable="true" style={{backgroundColor:"whitesmoke",textAlign:"center" }}>
<h1>History</h1>
<p>This company build in 2035 in some place.According to the legend this company is not build for the known purpose that they give.Some says the green will be the end of the white red blue .
  and other says if the 3 color get destroyed that mean maybe other red tiger will be destory this is according to the legend.</p>
  <p>If Your are reading stop because I dont know what I am writing so stop reading if the legend is true it is chance and luck.</p>
  <h1>What is KOTO</h1>
  <p>The instrument was originally used for court music. Thereafter, it came to be played by Buddhist monks, and eventually, reached the general populous.
     The koto is comprised of 
    13 silk strings (although today, synthetic strings are used), which are stretched across a body made of hollowed out Paulownia wood.</p>
    <h1>Help Section</h1>
    <h3>User can do the following:</h3>   
      <p>browse,search,add order,add comment,give like ,update order,delete order</p>
      </div>
  <div draggable="true" style={{backgroundColor:"",textAlign:"center" }}>
  <img className="imgS" src={S3}/>
  </div>
    


  </div>
  );
  }
  
  export default Appd;
/*initialValues={} onSubmit={} validationSchema={}
import SignIn from './SignIn';

import Book from './File/sample.pdf'
import { Worker } from '@phuocng/react-pdf-viewer';
import { Document, Page } from 'react-pdf/dist/esm/entry.parcel';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
*/