import Login from './login'
import Logout from './logout'
import Register from './register'
import {useSelector,useDispatch} from 'react-redux'
import React from 'react'
import styled from 'styled-components'

const BackStage = styled.div`

    position:fixed;
    width:100%;
    top:0;
    left:0;
    height:100vh;
    background-color:black;
    opacity:0.3;
    z-index:1000;

`

const PopUp = ()=>{

    const type  = useSelector((store)=>store.modal.modalType)
    const dispatch = useDispatch();

    let ActiveModal = null;

    const closeModal = ()=>{
        dispatch({
            type:"ModalHandler",
            payload:""
        })
    }

    switch(type) {

        case "Login":
            ActiveModal = <React.Fragment>  
                            <BackStage onClick={closeModal}/> 
                            <Login/> 
                          </React.Fragment> 
            break;
        case "Logout":
            ActiveModal = <React.Fragment>  
                             <BackStage onClick={closeModal}/> 
                             <Logout/> 
                          </React.Fragment> 
            break;
        case "Register":
            ActiveModal = <React.Fragment>  
                             <BackStage onClick={closeModal}/> 
                             <Register/> 
                         </React.Fragment> 
            break;    
    }

    return ActiveModal
}

export default PopUp;