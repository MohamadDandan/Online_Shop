import Axios from 'axios';
import React, { useState,Component ,useEffect} from "react";
import {useHistory } from 'react-router-dom';
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import {useParams} from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
function OrderDetail(){
  let history =useHistory();
  const[first,setfirst]=useState();
  function refreshPage() {
    window.location.reload(false);
  }
  const[value2,setvalue2]=useState();
  const[oid,setoid]=useState();
  var sum;
  const[ListPost,setListPost]=useState([]);
  let{id}=useParams();
  const value =localStorage.getItem("form")
  const ch=JSON.parse(value);
const[changer,setchanger]=useState(ch);
  useEffect(()=> {
  
    Axios.get(`http://localhost:3001/Abs/UO/${id}`).then((response)=> {
     //
setListPost(response.data)
console.log(response.data.length)
if(response.data.length==0){setfirst(0)}
else{
setfirst(response.data[0].Tests[0].Qun*response.data[0].PostPrice)}
console.log(first)
   
    })
  },[]);
  
  
  
  
  
  
  
  return(<div>
    <h3>Order detail of Order:{id}</h3>
    
    <table>
     <tr>
       
               <th>OrderID</th>
               <th>Quantity</th>
               <th>Product Name</th>
               <th>Total Price</th>
               <th></th>
               
             </tr>
     {ListPost.map((value, index) => {
       var order=value.Tests;
      sum=0+first;
       
       return(
         
       <>
         {order.map((Order_Value, key) => {
         sum=(Order_Value.Qun*value.PostPrice)+sum;
           
           return(
             <>
             
             <tr>
       <td>{Order_Value.id}</td>
       <td>{Order_Value.Qun}</td>
       <td ><a onClick={()=>{history.push(`/ProductD/${value.id}`)}}>{value.PostName}</a></td>
       <td>{Order_Value.Qun*value.PostPrice}$</td>
       <td style={{width:"120px"}}> <div>
          
       
        </div>
        
       </td>
       
       </tr></>
       );
       })}
       
      </>
      
   );
     })}
     
       
       
     
      </table>
      
      <h2>Total:{sum}$</h2>
      <h6>Your order will reach you between 1-2month.For anymore information please contact us</h6>
     
      
    
      
       
   
   
     </div>
   );
  }
  
  export default OrderDetail;