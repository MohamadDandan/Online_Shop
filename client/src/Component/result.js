import Axios from 'axios';
import React, { useState,Component ,useEffect} from "react";
import {Link} from 'react-router-dom';
import {useParams,useHistory } from 'react-router-dom';


function Trending(){
    const[ListPost,setListPost]=useState([]);
    let history=useHistory()
    let{search}=useParams();
    
useEffect(()=> {

    Axios.get(`http://localhost:3001/posts/search/${search}`).then((response)=> {
    setListPost(response.data)
    
    console.log(response)
    })
},[]);

return (
    <div style={{paddingBottom:"15px"}}>


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
export default Trending;