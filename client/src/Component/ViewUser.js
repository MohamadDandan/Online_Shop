import Axios from 'axios';
import React, { useState,Component ,useEffect} from "react";

import ReactFlexyTable from "react-flexy-table"
import {FaTrashAlt} from 'react-icons/fa';
import "react-flexy-table/dist/index.css"

function ViewUser(){
  const[ListPost,setListPost]=useState([]);
  const[State,setState]=useState(false);
  const[value,setvalue]=useState();
  const[id,setid]=useState();
  useEffect(()=> {

    Axios.get("http://localhost:3001/User/ViewAll").then((response)=> {
    setListPost(response.data)
    
    })
},[]);
  const GetUser=() => {
    Axios.get("http://localhost:3001/User/ViewCustomer").then((response) => {
      setListPost(response.data)
    })
  }

  const GetEmployee=() => {
    Axios.get("http://localhost:3001/User/ViewEmp").then((response) => {
      setListPost(response.data)
    })
  }
  const GetAll=() => {
    Axios.get("http://localhost:3001/User/ViewAll").then((response) => {
      setListPost(response.data)
    })
  }
 

  
  const update=(value,id)=>{
    const data ={State:value}
 
  Axios.put(`http://localhost:3001/User/update/${id}`,data).then((response)=> {
  console.log(response.data)
  })
  }
  
  
  const additionalCols = [
  
  {
    header: 'Update State',
    td: (data) => {
      return (
        <div>
          
          <select onChange={(e)=>setvalue(e.target.value)+setid(data.id)}  >
              <option  selected></option>
              <option value="Disactive">Disactive</option>
              <option value="Active" >Active</option>
              
  </select>
  <button onClick={(e)=>{update(value,id)}}>save</button>
        </div>
      )
    }
  }
  ]
  const empty = [
    {
      header: 'Actions',
      td: () => {
        return (
          <div>
            
              
            
          </div>
        )
      }
    }
  ]

return(<div>
  <button onClick={() =>GetUser()+setState(false)}>User</button>
  <button onClick={() =>GetEmployee()+setState(true)}>Employee</button>
  <button onClick={() =>GetAll()+setState(false)}>All user</button>

  
  
   
  <ReactFlexyTable data={ListPost} 
    sortable
    filterable 
    additionalCols={ State ?additionalCols:empty}
    />
    


  </div>
  );
  }
  
  export default ViewUser;