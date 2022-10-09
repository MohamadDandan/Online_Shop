import React, { useState,Component,useEffect } from "react";
import ReactDOM from 'react-dom';
import "./App.css";
import Axios  from "axios";
import L from './images/laptops lenovo.png';
import {Link,useParams,useHistory} from 'react-router-dom';
import { FaUser,FaKey ,FaEnvelope,FaRegUserCircle,FaFlag,FaCalendarAlt} from 'react-icons/fa';
function Profile(props) {
    const[Email,SetEmail]=useState("");
    const[User,SetUser]=useState("");
  
  let history = useHistory();
  useEffect(()=>{
    Axios.get("http://localhost:3001/signIn").then((response)=>{
      if(response.data.loggedIn==true) {
        let data = response.data.loggedIn;
        
        console.log(data);
      SetUser(response.data.user[0].UserName)
      SetEmail(response.data.user[0].UserEmail)
      }
    });
  },[])
  

 
    return(
        <div style={{justifyContent:"center"}}>
            <div className="pro">
                            <div><FaRegUserCircle style={{width:"110px", height:"140px"}} /></div>
                            <div >
                                <ul style={{paddingTop:"10px",listStyleType:"none"}}>
                                    <li ><a>Name: {User}</a></li>
                                    <br />
                                    <br />
                                    <li><a>Email: {Email}</a></li>
                                </ul>
                            </div>
                </div>
                <h2  className="proinfo2"> Edite</h2>
            <div className="proinfo">
                
                        <form style={{position: "relative"}} > 
                        <h4>Name</h4>    
                                <div className="input-container2">
                                    <a className="icon"><FaEnvelope /></a>
                                        <input className="input-field" type="text" placeholder="email" name="email" required />
                                        <a className="icon"><FaEnvelope /></a>
                                </div>
                        <h4>Password</h4> 
                                <div className="input-container2">
                                    <a className="icon"><FaEnvelope /></a>
                                        <input className="input-field" type="text" placeholder="email" name="email" required />
                                        <a className="icon"><FaEnvelope /></a>
                                </div>
                                </form>
                </div> 
                <h2  className="proinfo2"> Items</h2>
           <div className="proinfo">
          
                            <div className="divCon"> 
                            <h4>Cart </h4>
                            <Link to={"/ProductD"} className="text" >
                                
                        <div className="itemContainer" >
                            <a >
                                    <div className="infoItem" id="product">
                                        <a >Laptop Lenovo IP 1
                                            <br></br>
                                            <strong>US $1200</strong>
                                        </a>
                                    </div>
                            
                            </a>
                            
                        </div> </Link>
                        
                        <Link to={"/ProductD"} className="text" >
                                
                        <div className="itemContainer" >
                            <a >
                                    <div className="infoItem" id="product">
                                        <a >Laptop Lenovo IP 1
                                            <br></br>
                                            <strong>US $1200</strong>
                                        </a>
                                    </div>
                            
                            </a>
                            
                        </div> </Link>
                        
                        </div>
                        <div className="divCon"> 
                            <h4>Buy</h4>
                            <Link to={"/ProductD"} className="text" >
                                
                        <div className="itemContainer" >
                            <a >
                                    <div className="infoItem" id="product">
                                        <a >Laptop Lenovo IP 1
                                            <br></br>
                                            <strong>US $1200</strong>
                                        </a>
                                    </div>
                            
                            </a>
                        </div> </Link>
                        </div>
           </div>
        </div>
    );
}
export default Profile;