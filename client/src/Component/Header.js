import Axios from 'axios';
import React, { useState,Component ,useEffect} from "react";
import {Link,useHistory} from 'react-router-dom';
import "./App.css";
import SignIn from './SignIn';
import ActorControl from './ActorControl';
import ActorControl2 from './ActorControl2';
import Form from './Form';
function Header() {
    const [darkmode, setdark]=useState(true);
    const [openNav,setopen]=useState(true);
    const [openSub,setSub]=useState(true);
    const [openSub2,setSub2]=useState(true);
    const[ListPost,setListPost]=useState([]);
    const[res,setRes]=useState();
    let history=useHistory()
    function refreshPage() {
        window.location.reload(false);
      }
useEffect(()=> {

    Axios.get("http://localhost:3001/Pro_Cat_Route").then((response)=> {
    setListPost(response.data)
    })
},[]);
    const go=(id)=> {
        history.push(`/Cate_product/${id}`);
        refreshPage()
    }              

   
    return (
        
        <header className="HeaderBlack " >
        <div className="HeaderBlack ">
            <div className="navbar">
                <ul className="subheader">
                    <li className="HLC "><a ><Link to={"/"} className="text" >Home</Link></a></li>
                    <li className="HLC dropdown ">
                        <a >Options</a>
                            
                                <ActorControl2/>
		                    
                    </li>
                    <li className="HLC dropdown ">
                        <a >Products</a>
                            <div className="dropdownContent">
                            {ListPost.map((value, index)=>{
                                return(
                                <a key={index} onClick={()=>go(value.id)} >{value.Category}</a>
                                );
                                })}
                                
		                    </div></li>
                    <li className="HLC"><a><Link to={"/AboutUs"} className="text">About Us</Link></a></li>
                </ul>
            </div>
            <div className="divSizeRight">
                <Form/>
            </div>
            
            <div className="divSizeLeft">
                
                <button className="border-search" onClick={()=>history.push(`/result/${res}`)+refreshPage()}>o</button>
                <input type="text" className="border-search-text" placeholder="Search" onChange={(e)=>setRes(e.target.value)} ></input>
            </div>
            
            <a className={(openNav ? 'Close ' : 'display display2 ')} onClick={() => setopen(!openNav)}>&#9776;</a>
           <a className={(openNav ? 'Close ' : 'display display2 ')+" "+"postion-search"}><button className="border-search postion-search">o</button>
                <input type="text" className="border-search-text postion-search" placeholder="Search"></input></a>
        </div>
        
        <div className={(openNav ?'OpenSlider':'CloseSlider')+" "+"z2" } >
        <div className="ulMargin  "> <a  className={(openNav ? 'display display3   ' : 'display2  ')} onClick={() => setopen(!openNav)} >&times;</a></div>
           <div >
           <ul  className={openNav ? 'SlideContant ' : 'Close'}>
                    <li  className={openNav ? 'SlideContant display3' : 'Close'}><a><Link to={"/"} className="text" >Home</Link></a></li>
                    <li  className={(openNav ? 'SlideContant display3' : 'Close')+" "}><a onClick={() => setSub(!openSub)}>Pages</a>
                        <div className={(openSub ?'DropDownOpen':'DropDownClose') }>
                        {ListPost.map((value, index)=>{
                                return(
                                <a key={index} onClick={()=>go(value.id)} >{value.Category}</a>
                                );
                                })}
		                </div>
                    </li>
                    <li  className={(openNav ? 'SlideContant display3' : 'Close')+" "}>
                    <a onClick={() => setSub2(!openSub2)}>Pages</a>
                        <div className={(openSub2 ?'DropDownOpen':'DropDownClose') }>
                        <ActorControl/>
		                </div>
                    </li>
                    <li  className={openNav ? 'SlideContant display3' : 'Close'}><a><Link to={"/AboutUs"} className="text">About Us</Link></a></li>
                </ul>
                </div></div>
        </header>
        
    );
}

export default Header;