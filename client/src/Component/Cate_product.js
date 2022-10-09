import Axios from 'axios';
import React, { useState,Component ,useEffect} from "react";
import {useParams,useHistory ,useLocation} from 'react-router-dom';
import {Header} from './Header';


function Cate_product(){
    const[ListPost,setListPost]=useState([]);
    let history=useHistory()
    let{Cid}=useParams();
   console.log( Cid.get)
useEffect(()=> {
    Axios.get(`http://localhost:3001/posts/cate/${Cid}`).then((response)=> {
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
export default Cate_product;