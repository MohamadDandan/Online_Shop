import React, { Component, useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import "./App.css";
import Axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

function CreateCategory() {
    let history = useHistory();




    const onSubmit = (data) => {

        Axios.post("http://localhost:3001/Pro_Cat_Route", data).then((response) => {
            history.push('/');


        });
    };
    const onCancel = (data, { resetForm }) => {

        resetForm();

    };
    const initialValues = {
        Category: "",

    };
    const validationSchema = Yup.object().shape({
        Category: Yup.string().min(3).required(),

    })


    return ( 
        <div className = "createPage" >
        <Formik initialValues = { initialValues }
        onSubmit = { onSubmit }
        onCancel = { onCancel }
        validationSchema = { validationSchema } >
        <Form className = "formContainer" >
        < label > Create Category </label> 
         <ErrorMessage name = "Category"
        component = "span"/>
        <Field id = "inputCreateCategory"
        name = "Category"
        placeholder = "Category Name"/>
        <div >
        
        <button type = "submit" > Create </button> 
        <button className = "pad"
        type = "reset" > Cancel </button></div >
        
        </Form> 
        </Formik>    
       </div>
    );
}


export default CreateCategory;