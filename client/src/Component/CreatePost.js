import React, { Component,useState,useEffect } from "react";
import {Link,useHistory} from 'react-router-dom';
import "./App.css";
import Axios from 'axios';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup';
function CreatePost() {
let history =useHistory();
const[ListPost,setListPost]=useState([]);


useEffect(()=> {

  Axios.get("http://localhost:3001/Pro_Cat_Route").then((response)=> {
  setListPost(response.data)
  })
},[]);
  const onSubmit = (data) => {
    
    Axios.post("http://localhost:3001/posts", data).then((response) => {
      history.push('/');
      
      
    });
  };
  const onCancel = (data,{resetForm}) => {
    
      resetForm();
    
  };
  const initialValues={
    PostName:"",
    PostPrice:"",
    PostDetail:"",
    CateId:""
  };
  const validationSchema=Yup.object().shape({
    PostName: Yup.string().required(),
    PostPrice:Yup.number().positive().required(),
    PostDetail:Yup.string().min(30).required(),
    CateId:Yup.number().positive().required()
  })
 

    return (
      <div className="createPage">
          <Formik initialValues={initialValues} onSubmit={onSubmit} onCancel={onCancel} validationSchema={validationSchema} >
          <Form className="formContainer">
          <label>Title: </label> 
          <ErrorMessage name="PostName" component="span" />
          <Field
            id="inputCreatePost"
            name="PostName" placeholder="product name"
          />
          <label>Post: </label>
          <ErrorMessage name="PostPrice" component="span" />
          <Field
            id="inputCreatePost"
            name="PostPrice" placeholder="PostPrice"
          />
          <label>PostDetail: </label>
          <ErrorMessage name="PostDetail" component="span" />
          <Field
            id="inputCreatePost"
            name="PostDetail" placeholder="PostDetail"
          />
          <label>PostType: </label>
          <ErrorMessage name="CateId" component="span" />
          <Field 
            id="inputCreatePost"
            name="CateId"
            as="select"
           >
             <option value=" "> </option>
             {ListPost.map((value, index)=>{
                                return(
                                  <option key={index} value={value.id}>{value.Category}</option>
                                
                                );
                                })}

           </Field>
          
           <div >
            <button type="submit" >Create</button>
            <button className="pad" type="reset" >Cancel</button></div>
            </Form>
            </Formik>  
          
            
                 
                
        </div>
           
        
        
        
    );
  }


export default CreatePost;