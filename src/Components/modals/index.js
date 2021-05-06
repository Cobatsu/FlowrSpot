import Login from './login'
import Logout from './logout'
import Register from './register'
import {useSelector} from 'react-redux'
import React from 'react'
import styled from 'styled-components'

const BackStage = styled.div`

    position:fixed;
    top:0;
    left:0;
    width:100%:
    height:100%;   
    background-color:black;
    opacity:0.35;


`

const PopUp = ()=>{

    const type  = useSelector((store)=>store.modal.modalType)

    let ActiveModal = null;

    switch(type) {

        case "Login":
            ActiveModal = <React.Fragment>  
                            <BackStage/> 
                            <Login/> 
                          </React.Fragment> 
        case "Logout":
            ActiveModal = <React.Fragment>  
                             <BackStage/> 
                             <Logout/> 
                          </React.Fragment> 
            break;
        case "Register":
            ActiveModal = <React.Fragment>  
                             <BackStage/> 
                             <Register/> 
                         </React.Fragment> 
            break;    
    }

    return ActiveModal
}

export default PopUp;