import React, { Component,useState,useEffect ,useContext} from "react";
import {Link,useHistory} from 'react-router-dom';
import "./App.css";
import Axios  from "axios";
import { AuthContext } from "./AuthContext";
import {Form} from "./Form"


function ActorControl() {
const user = (<div >
    <Link to={"/Order"} className="text">My Order</Link>
    </div>);
const emp = (  
  <div >
      <Link to={"/ViewOrder"} className="text">Manage Order</Link>
      <Link to={"/Order"} className="text">My Order</Link>
      
      
      </div>
  );
const admin = (  
<div >
  <Link to={"/CreateCategory"} className="text">Create Category</Link>
    <Link to={"/CreatePost"} className="text">Create Post</Link>
    <Link to={"/CreateEmp"} className="text">Create Employee</Link>
    <Link to={"/ViewUser"} className="text">View Users</Link>
    <Link to={"/DeleteProduct"} className="text">Delete Product</Link>
    </div>
);
const NoActor = (<div ></div>);
const [Appears, setAppears] = useState(NoActor);

 useEffect(()=>{
    Axios.get("http://localhost:3001/User/auth",{
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    })
    .then((response)=>{
      if(localStorage.getItem("accessToken")){
            if(response.data.UserTypeId=="1"){
                setAppears(user)
            }else if(response.data.UserTypeId=="2"){
                setAppears(emp)
            }else if(response.data.UserTypeId=="3"){
              setAppears(admin)
            }
    }else{
      setAppears(NoActor);
    }
    })
  },[])
  
  return(
      <div>
          {Appears}
      </div>

  );}
  export default ActorControl;