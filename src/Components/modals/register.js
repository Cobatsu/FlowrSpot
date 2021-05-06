import React , {useState} from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import {validate} from 'email-validator'
import {Title,Form,SubmitButton,} from './login'

const ModalContainer = styled.div`

    position:fixed;
    display:flex;
    flex-direction:column;
    align-items:stretch;
    width: 440px;
    height: 410px;
    top: 50%;
    left: 50%;
    margin-top: -20px;
    margin-left: -250px;
    padding:25px;
    box-sizing:border-box;
    top:25%;
    background:#FFFFFF;
    z-index:1001;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    
`

const Fields = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`


const validateStageValues = values => {

    let errorStore = {}; 
    let { email , password } = values; 

    if (!email) {

        errorStore.email = "This Field Can Not Be Blank!"

    } else if (!validate(email)) { // " Email-validator is a small library that helps to validate user's email

        errorStore.firstName = 'Wrong Format !';

    }
  
    if (!password) {

        errorStore.email = "This Field Can Not Be Blank!"

    } 

}

const LoginModal = (props)=>{

    const formik = useFormik({ // Here, We dont need to "DECLARE" and "HANDLE" our own state to store data  because useFormik already does it for us ! .

        initialValues:{
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            date_of_birth:''
        },
        onSubmit:async (stagedData) => {

            const res = await fetch("https://flowrspot-api.herokuapp.com/api/v1/users/register",{
                method:"POST",
                body:stagedData
            });

            const { error , token } = await res.json();

            if(error) {

            }
        },
        validate:validateStageValues
    })

    return <ModalContainer>

        <Title> Create an Account </Title>

        <Form onSubmit={formik.handleSubmit}>

            <Fields>

                    <TextField 
                    style={{marginTop:8 , width:"48.7%"}} 
                    label="First Name" 
                    variant="outlined"
                    name="first_name"
                    onChange={formik.handleChange} 
                    value={formik.values.first_name} />

                { /* It is great fun to use customized inputs provided by material UI ! */}

                    <TextField  
                    style={{marginTop:8 ,  width:"48.7%"}}   
                    label="Last Name" 
                    variant="outlined"
                    name="last_name"
                    onChange={formik.handleChange}
                    value={formik.values.last_name}  />

                    <TextField  
                    style={{marginTop:8 ,  width:"100%"}}   
                    label="Date of Birth" 
                    variant="outlined"
                    name="date_of_birth"
                    onChange={formik.handleChange}
                    value={formik.values.date_of_birth} />

                    <TextField  
                    style={{marginTop:8 ,  width:"100%"}}   
                    label="Email Address" 
                    variant="outlined"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email} />


                    <TextField  
                    style={{marginTop:8 ,  width:"100%"}} 
                    label="Password" 
                    variant="outlined"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password} />


            </Fields>

            <SubmitButton type="submit" > Create Account </SubmitButton>

        </Form>
           
    </ModalContainer>

}

export default LoginModal;
