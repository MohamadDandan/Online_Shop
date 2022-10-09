import React, { useState, Component,useEffect } from "react";
import "./App.css";
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup';
import Axios from 'axios';
import {useParams,useHistory } from 'react-router-dom';
import CreatePost from './CreatePost';


function NewForm() {
  let history =useHistory();
let{id}=useParams();
const value =localStorage.getItem("form")
const ch=JSON.parse(value);
const[changer,setchanger]=useState(ch);
function refreshPage() {
  window.location.reload(false);
}

const onSubmit = (data,{resetForm}) => {
  Axios.post("http://localhost:3001/Absr",data,
 {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    }}
  
    ).then((response) => {
      console.log(response);
      localStorage.setItem("idcart",response.data.id)
      localStorage.setItem("form",false)
      const value2 =localStorage.getItem("form")
      const ch2=JSON.parse(value2);
      setchanger(ch2)
      resetForm();
      refreshPage();
      
    
    
  });
};
const onCancel = (data, { resetForm }) => {

  resetForm();

};
  
  const initialValues={
   
    Address:"",
    status: "in progress"
    
  };
  const validationSchema=Yup.object().shape({
    
    Address:Yup.string().min(12).max(200).required()
    
  })

return(



  <div >
  <Formik initialValues={initialValues} onSubmit={onSubmit}  onCancel = { onCancel } validationSchema={validationSchema} >
  <Form className="formContainer">
  
  <label>Address </label>
  <ErrorMessage name="Address" component="span" />
  <Field
    id="inputCreateCategory"
    name="Address" placeholder="Address Name"
  />
   <div >
    <button type="submit" >Start order </button>
    <button className="pad"  type = "reset" >Cancel</button></div>
    </Form>
    </Formik>   
</div>
        
    );};
    export default NewForm;