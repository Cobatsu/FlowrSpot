import React , {useState} from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { useFormik } from 'formik';

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
    padding:22px;
    &:hover{
        cursor:pointer;
    }

`
const Title = styled.span`
    font-weight:500;
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

const LoginModal = ({isTouched})=>{


    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        onSubmit:values => {

        }
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

