import Axios from 'axios';
import React, { useState,Component ,useEffect} from "react";
import {Link} from 'react-router-dom';
import {useHistory } from 'react-router-dom';


function TopDeal(){
    const[ListPost,setListPost]=useState([]);
    let history=useHistory()

useEffect(()=> {

    Axios.get("http://localhost:3001/posts").then((response)=> {
    setListPost(response.data)
    })
},[]);

return (
    <div>


        {ListPost.map((value, index)=>{
    var Img=value.PostName;
    
    return(
         
        <div key={index} className="itemContainer2" onClick={()=>{history.push(`/ProductD/${value.id}`)}}>
            <a >
            
                    <div className="imgItem" >
                        <img className="imgS" src={"Product/"+Img+".png"} />
                        </div>
                    <div className="infoItem2" id="product">
                        <a >{value.PostName}
                            <br></br>
                            <strong>US:{value.PostPrice}$</strong>
                        </a>
                    </div>
            
            </a>
        </div> 
   
            );})}



    </div>);

}
export default TopDeal;