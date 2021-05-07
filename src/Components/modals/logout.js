import React from 'react';
import styled from 'styled-components';
import {useSelector,useDispatch, shallowEqual} from 'react-redux'
import { Button } from '@material-ui/core'


const ModalContainer = styled.div`

    position:fixed;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: 600px;
    height: 610px;
    left: 48%;
    margin-top: -50px;
    margin-left: -250px;
    padding:50px ;
    box-sizing:border-box;

    background:#FFFFFF;
    z-index:1001;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
    border-radius: 3px;

`
const InnerWrapper = styled.div`

    width:68%;
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;

`
const Header = styled.div`

    width:100%;
    display:flex;
    align-items:center;
  

`



const Field = styled.div`
    font-size:18px;
    display:flex;
    flex-direction:column;
    color:#334144;
    margin-bottom:18px;
`
const Desc = styled.span `
    font-size:12px;
    color:#949EA0;
    margin-bottom:8px;
`
const MainFields = styled.div`
    margin-top:40px;

`

const Capitalize = text =>  {
    
    return text ? text[0].toUpperCase() + text.slice(1) : null

}

const LogoutModal = ()=>{

    const dispatch = useDispatch();
    const { first_name , last_name , email , date_of_birth} = useSelector(store => store.user , shallowEqual)

    return <ModalContainer> 
        
        <InnerWrapper>

                <Header>

                    <img src="./img_avatar.png" width="60px" height="60px" style={{borderRadius:'50%'}}/>
                    <span style={{marginLeft:30,fontSize:'25px'}}> { Capitalize(first_name) + " " + Capitalize(last_name) }</span>
                    
                </Header>

                <MainFields>

                        <Field> 
                            <Desc> First Name </Desc>
                            <span> { Capitalize(first_name) } </span>
                        </Field>

                        <Field> 
                            <Desc > Last Name </Desc>
                            <span> { Capitalize(last_name) } </span>
                        </Field>

                        <Field> 
                            <Desc> Date of Birth </Desc>
                            <span>{date_of_birth} </span>
                        </Field>

                        <Field> 
                            <Desc> Email Address </Desc>
                            <span> {email} </span>
                        </Field>

                </MainFields>
               
                <Button onClick={() => {  
                    
                    dispatch({ type: "LOG_OUT" })
                    dispatch({ type: "ModalHandler" , payload:"" })


                    } }    variant="contained" color="primary"> LOGOUT </Button>

        </InnerWrapper>
    
    </ModalContainer>

}

export default LogoutModal;