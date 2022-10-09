import Axios from 'axios';
import React, { useState,Component ,useEffect} from "react";
import {FaTrashAlt} from 'react-icons/fa';
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import {useHistory } from 'react-router-dom';

function Order(){
const[ListPost,setListPost]=useState([]);
let history =useHistory();
useEffect(()=> {

  Axios.get("http://localhost:3001/Absr/get",
  {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    }}).then((response)=> {
  setListPost(response.data)
  
  })
},[]);
const view_order_detail=(id)=>{
Axios.delete(`http://localhost:3001/Abs/delete_by_emp/cd preact/client`).then((response)=> {
setListPost(response.data)
})
}


const additionalCols = [
{
  header: 'Order Detail',
  td: (data) => {
    return (
      <div>
        
          <a
          width='30'
          height='20'
          onClick={()=>{history.push(`/OrderDetail/${data.id}`)}}>View Detail</a>
        
      </div>
    )
  }
}
]



return(<div>

<h1>View Orders</h1>

 
<ReactFlexyTable data={ListPost} 
  sortable
  filterable 
  additionalCols={additionalCols}/>
  


</div>
 );
}

export default Order;