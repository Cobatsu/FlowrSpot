import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`

    position:fixed;
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-flow:column;
    width: 440px;
    height: 290px;
    top: 50%;
    left: 50%;
    margin-top: -20px;
    margin-left: -250px;
    border-radius:8px;
    padding:15px;
    box-sizing:border-box;
    top:25%;
    background:#FFFFFF;
    box-shadow: 0 1px 6px -1px rgba(0, 0, 0,0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
    z-index:1001;
`

const LoginModal = ({isTouched})=>{

    return <ModalContainer/>

}

export default LoginModal;

