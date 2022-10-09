import React, { Component,useContext,useState,useEffect } from "react";
import {Link,useHistory} from 'react-router-dom';
import "./App.css";
import Axios  from "axios";
import { FaUser,FaKey ,FaEnvelope,FaFlag,FaCalendarAlt} from 'react-icons/fa';


function Login() {
  const[Form,fs]=useState(true);
  const[UserName,setUserName]=useState("");
  const[Password,setPassword]=useState("");
  const [user, setuser]= useState("");
  
  const [Appears, setAppears] = useState(true);

  let history=useHistory()
  function refreshPage() {
    window.location.reload(false);
  }

  const login =()=>{
    const data ={UserName:UserName,Password:Password}
    Axios.post("http://localhost:3001/User/login2",data).then((response)=>{
      if(response.data.error){
        alert(response.data.error)
      }else{
          localStorage.setItem("accessToken",response.data)
          fs(true)
          setAppears(false)
          setuser(data)
          refreshPage()
        }
      
    })
  };
  const logout=()=>{
    localStorage.removeItem("accessToken")
    localStorage.removeItem("idcart")
    localStorage.setItem("form",true)
    setAppears(true)
    refreshPage()
    
  }
  useEffect(()=>{
    Axios.get("http://localhost:3001/User/auth",{
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    })
    .then((response)=>{
      if(localStorage.getItem("accessToken")){
      setAppears(false);
      setuser(response.data)
      console.log(response.data.UserTypeId)
    }else{
      setAppears(true)
    }
    })
    
  },[])
  

    return (
      
       <div>
            
            {Appears?
            <div >
                <div  >
                <a onClick={() =>fs(!Form)}>Sign In</a><a>   |   </a>
                <a ><Link to={"/Register"} className="text">Sign Up</Link></a> 
                </div>
                <div className={(Form ? 'CloseForm':'OpenForm_Login')}>
                  <h3 className="login_title">ACCOUNT LOGIN</h3>
                <div className="login_div">
                    
                    <div className="input-container">
                        <a className="icon_login"><FaUser className="icon_login_log" /></a>
                        <input type="text"  className="input-field" 
                              placeholder="username" required 
                              onChange={(e)=>{setUserName(e.target.value)}} />
                    </div>
                    
                    <div className="input-container">
                        <a className="icon_login"><FaKey className="icon_login_log" /></a>
                        <input type="password" name="password"  placeholder="password" required 
                          className="input-field" onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>

                    <button className="ButtonsControl2 Login_padding" onClick={login} >LOGIN</button>
                    <button className="ButtonsControl2" onClick={() =>fs(!Form)} >&#10005;</button>
                
                </div>
                <>
                  <h6 className="login_footer">Not Register?&nbsp;&nbsp;&nbsp;<a onClick={() =>fs(!Form)} className="login_footer2"><Link to={"/Register"} className="text" >Click Here</Link></a></h6>
                  </>
                
                </div>
                    
            </div>:
            <div>
                <a ><Link to={"/Profile"} className="text" >{user.UserName}</Link></a>
                <a>   |   </a>
                <a onClick={logout}><Link to={"/"} className="text">Log Out</Link></a>
            </div>}
        </div>
        
       
      
    );
  }


export default Login;
/*{/*<div className="App">
       
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Email</label>
            <input type="text" name="email" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">password</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">ENTer</button>
        </form>
        
      </div> */

      ////////////////////////////////////////////////////////////////////////////
      /*let history = useHistory();
  const [userId, setuserId] = useState("");
  const [user, setuser] = useState("");
  const [password, setPassword] = useState("");
  const[Appears, SetAppears]= useState(true);
  const[Form,fs]=useState(true);
  const[LIS,SetLIS]=useState(" ");
  
  Axios.defaults.withCredentials=true;
  const signIn =()=>{
    Axios.post('http://localhost:3001/signIn',{
        UserName:user,
        Password:password, 
        iduser:userId,
    }).then((response)=>{
      if(!response.data.auth){
        alert("wrong username/password")
          SetAppears(true);
          
        console.log(response);
        
      }
      
        else {
          localStorage.setItem("token", response.data.token)
          SetAppears(false);
         console.log(response.data);
         console.log(localStorage.getItem("token"));
          
          }
    });
}


 /* function handleSubmit(event) {
    event.preventDefault();
    if (event.target.email.value===Name
    && event.target.password.value==="123"){
      console.log("correct");
      event.target.email.value = "";
      event.target.password.value = "";
      SetAppears(false);
    }else{
      console.log("nope")
    }
  }
    useEffect(()=>{
      Axios.get("http://localhost:3001/signIn").then((response)=>{
        if(response.data.loggedIn==true) {
        SetAppears(false)
        SetLIS(response.data.user[0].UserName);
        setuserId(response.data.user[0].iduser);
        }
      });
    },[])
   
    const editAddress = ( customerId) => {
      
      history.push('./Profile',customerId)
    }
    const userAuth=()=>{
      Axios.get("http://localhost:3001/isUser",{
        headers:{
          "x-access-token":localStorage.getItem("token")
        },

        
      }).then((response)=>{
        console.log(response)
      });
    }*/