import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`

    position:fixed;
    display:flex;
    flex-direction:column;
    align-items:stretch;
    width: 600px;
    height: 610px;
    left: 48%;
    margin-top: -50px;
    margin-left: -250px;
    padding:15px 25px 20px 25px ;
    box-sizing:border-box;

    background:#FFFFFF;
    z-index:1001;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
    border-radius: 3px;

`


const LogoutModal = ()=>{

    return <ModalContainer> 
        
        
    
    </ModalContainer>

}

export default LogoutModal;