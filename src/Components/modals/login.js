import React , {useState} from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import {validate} from 'email-validator'

const ModalContainer = styled.div`

    position:fixed;
    display:flex;
    flex-direction:column;
    align-items:stretch;
    width: 440px;
    height: 290px;
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

const SubmitButton = styled.button`

    border:none;
    background: linear-gradient(270deg, #ECBCB3 0%, #EAA79E 100%);
    box-shadow: 0px 15px 20px rgba(234, 168, 159, 0.2);
    border-radius: 3px;
    color:#FFFFFF;
    font-weight: 500;
    font-size: 14px;
    padding:22px;
    &:hover{
        cursor:pointer;
    }

`
const Title = styled.span`
    font-weight:500;
    font-size:20px;
    text-align:center;
`
const Fields = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:100%;
    width:100%;
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
            password:''
        },
        onSubmit:async (stagedData) => {

            const res = await fetch("https://flowrspot-api.herokuapp.com/api/v1/users/login",{
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

        <Title> Welcome Back </Title>

        <Form onSubmit={formik.handleSubmit}>

            <Fields>

                <TextField 
                    style={{marginTop:8}} 
                    label="Email Address" 
                    variant="outlined"
                    name="email"
                    type="email"
                    onChange={formik.handleChange} 
                    value={formik.values.email} />

                { /* It is great fun to use customized inputs provided by material UI ! */}

                <TextField  
                    style={{marginTop:8}}   
                    label="Password" 
                    variant="outlined"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}  />


            </Fields>

            <SubmitButton type="submit" > Login to your Account </SubmitButton>

        </Form>
           
    </ModalContainer>

}

export default LoginModal;

