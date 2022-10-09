import React, { useState, Component,useEffect } from "react";
import "./App.css";
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup';
import Axios from 'axios';
import {useParams,useHistory } from 'react-router-dom';
import CreatePost from './CreatePost';


function NewForm2() {
  let history =useHistory();
let{id}=useParams();
const idcart=localStorage.getItem("idcart");
  const onSubmit = (data,{resetForm}) => {
    Axios.post(`http://localhost:3001/Abs/${id}`,data
    
    
    ,{
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      }},{PostId: id}
    
      ).then((response) => {
        resetForm();
        
      console.log(response.data)
      
      
    });
  };
 
  const onCancel = () => {
   
        localStorage.removeItem("idcart")
    localStorage.setItem("form",true)
    history.push("/Order");

  
  };
  const initialValues={
    Qun:"",
      OTestId:idcart
    
  };
  const validationSchema=Yup.object().shape({
    Qun: Yup.number().positive().min(1).required(),
    
    
  })

return(



  <div >
  <Formik initialValues={initialValues} onSubmit={onSubmit}  validationSchema={validationSchema} >
  <Form className="formContainer">
  <label>Quantity</label> 
  <ErrorMessage name="Qun" component="span" />
  <Field
    id="inputCreateCategory"
    name="Qun" placeholder="Quantity"
  />
 
   <div >
    <button type="submit" >Add item </button>
    <button className="pad" onclick={onCancel}  onClick={onCancel}>Confirm</button></div>
    </Form>
    </Formik>   
</div>
        
    );};
    export default NewForm2;