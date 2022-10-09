import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./App.css";
function SideNav(){
  const[Form,Appear] = useState(true);
    const [openNav,setopen]=useState(true);
    const [openSub,setSub]=useState(true);
   
  return(
    <div>
      <a className={(openNav ? 'Close ' : 'display display2 ')} onClick={() => setopen(!openNav)}>&#9776;</a>
    <div className={(openNav ?'OpenSlider':'CloseSlider')+" "+"z2" }>
    <div className="ulMargin  "> <a  className={(openNav ? 'display display3   ' : 'display2  ')} onClick={() => setopen(!openNav)} >&times;</a></div>
           <div >
           <ul  className={openNav ? 'SlideContant ' : 'Close'}>
                    <li  className={openNav ? 'SlideContant display3' : 'Close'}><a><Link to={"/"} className="text" >Home</Link></a></li>
                    <li  className={(openNav ? 'SlideContant display3' : 'Close')+" "}><a onClick={() => setSub(!openSub)}>Pages</a>
                        <div className={(openSub ?'DropDownOpen':'DropDownClose') }>
                        <a >Fashion</a>
                            <a >Phone</a>
                            <a >Computer</a>
                            <a  >Accessory</a>
		                </div>
                    </li>
                    <li  className={openNav ? 'SlideContant display3' : 'Close'}><a>Products</a></li>
                    <li  className={openNav ? 'SlideContant display3' : 'Close'}><a><Link to={"/AboutUs"} className="text">About Us</Link></a></li>
                </ul>
                </div>
                </div>
    </div>
    );
}

  export default SideNav;