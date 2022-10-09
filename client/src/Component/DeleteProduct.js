import Axios from 'axios';
import React, { useState,Component ,useEffect} from "react";

import ReactFlexyTable from "react-flexy-table"
import {FaTrashAlt} from 'react-icons/fa';
import "react-flexy-table/dist/index.css"

function DeleteProduct(){
  const[ListPost,setListPost]=useState([]);
  const[value2,setvalue2]=useState();
  const[id,setid]=useState();
  function refreshPage() {
    window.location.reload(false);
  }
  useEffect(()=> {

    Axios.get("http://localhost:3001/posts/all").then((response)=> {
    setListPost(response.data)
    
    })
},[]);
  
  const DeleteProduct=(id)=>{
    Axios.delete(`http://localhost:3001/posts/delete/${id}`)
    .then((response)=> {
    setListPost(response.data)
    })
  }
  const updatePostPrice=(value,id)=>{
    const data ={PostPrice:value}
 
  Axios.put(`http://localhost:3001/posts/update_Price/${id}`,data).then((response)=> {
  console.log(response.data)
  refreshPage()
  })
  }

  
  const additionalCols = [
    {
      header: 'Actions',
      td: (data) => {
        return (
          <div>
            
              <FaTrashAlt
              width='30'
              height='20'
              onClick={()=>DeleteProduct(data.id)}/>
            
          </div>
        )
      }
    },
    {
      header: 'Add comment',
      td: (data) => {
        return (
          <div>
            <input onChange={(e)=>setvalue2(e.target.value)+setid(data.id)}
             type="text" ></input>
  
    <button onClick={(e)=>{updatePostPrice(value2,id)}}>save</button>
          </div>
        )
      }
    }
  ]
 

return(<div>
  
  
  
  
  
   
  <ReactFlexyTable data={ListPost} 
    sortable
    filterable 
    additionalCols={additionalCols}
    />
    


  </div>
  );
  }
  
  export default DeleteProduct;