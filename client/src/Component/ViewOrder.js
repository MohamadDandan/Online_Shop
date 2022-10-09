import Axios from 'axios';
import React, { useState,Component ,useEffect} from "react";
import {GrAddCircle} from 'react-icons/gr';
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import {useHistory } from 'react-router-dom';
function ViewOrder(){
  const[ListPost,setListPost]=useState([]);
  const[value,setvalue]=useState();
  const[value2,setvalue2]=useState();
  const[id,setid]=useState();
  let history =useHistory();
  function refreshPage() {
    window.location.reload(false);
  }
  useEffect(()=> {
  
    Axios.get("http://localhost:3001/Absr/getAll").then((response)=> {
    setListPost(response.data)
    
    })
  },[]);
  const update=(value,id)=>{
    const data ={status:value}
 
  Axios.put(`http://localhost:3001/Absr/update/${id}`,data).then((response)=> {
  console.log(response.data)
  refreshPage()
  })
  }
  const updateComent=(value,id)=>{
    const data ={comment:value}
 
  Axios.put(`http://localhost:3001/Absr/updateComent/${id}`,data).then((response)=> {
  console.log(response.data)
  refreshPage()
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
            onClick={()=>{history.push(`/OrderDetail_emp/${data.id}`)}}>View Detail</a>
          
        </div>
      )
    }
  },
  {
    header: 'Update Status',
    td: (data) => {
      return (
        <div>
          
          <select onChange={(e)=>setvalue(e.target.value)+setid(data.id)}  >
              <option value="in progress" selected>in progress</option>
              <option value="Pending Payment">Pending Payment</option>
              <option value="On Hold">On Hold</option>
              <option value="Failed ">Failed </option>
              <option value="Canceled  ">Canceled  </option>
              <option value="Completed  ">Completed  </option>
  </select>
  <button onClick={(e)=>{update(value,id)}}>save</button>
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

  <button onClick={(e)=>{updateComent(value2,id)}}>save</button>
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
  
  export default ViewOrder;