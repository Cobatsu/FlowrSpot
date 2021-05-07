import React , {useState,useEffect} from 'react'
import styled  from 'styled-components'
import {shallowEqual, useDispatch,useSelector}  from 'react-redux'

const NavBarItems = styled.div`

    display:flex;   
    justify-content:space-around;
    align-items:center;
    width:700px;
`

const NavBarItem = styled.span`


    display:flex;
    flex-shrink: 0; 
    align-items:center;
    justify-content:center;
    font-size:16px;
    color: #949EA0;
    width:140px;
    &:hover{
        cursor:pointer;
    }

`

const DesktopNav = ()=>{
  
    const dispatch = useDispatch()
    const { first_name , isLoggedin , last_name } = useSelector( store => store.user , shallowEqual );

    return <React.Fragment>

        <NavBarItems style={{color:"#EAA79E",justifyContent:"flex-start",fontSize:"20px",boxSizing:"border-box",paddingLeft:30}} >

            FlowrSpot

        </NavBarItems>   

        <NavBarItems style={{marginRight:isLoggedin ? '30px' : '50px'}}>

                <NavBarItem>
                        Flowers
                </NavBarItem>

                <NavBarItem>
                        Latest Sightings
                </NavBarItem>

                <NavBarItem>
                        Favorites
                </NavBarItem>


                { 
                    isLoggedin ? ( 
                        
                        <NavBarItem onClick={()=>dispatch({type:"ModalHandler",payload:"Logout"})}>

                            <span style={{marginRight:7}}> 
                                 { first_name[0].toUpperCase() + first_name.slice(1) }
                            </span>

                            <span>
                                 { last_name[0].toUpperCase() + last_name.slice(1)   }
                            </span>

                            <img src="./img_avatar.png" width="60px" height="60px" style={{borderRadius:'50%',marginLeft:30}}/>

                        </NavBarItem>  
                        
                        ) : (
                        
                        <React.Fragment>

                            <NavBarItem 
                                style={{color:"#DF9186"}}     
                                onClick={ ()=>{
                                    dispatch({
                                        type:"ModalHandler",
                                        payload:"Login"
                                    })
                                }} >
                                    Login
                            </NavBarItem>
        
                            <NavBarItem style={{
            
                                background:'linear-gradient(270deg, #ECBCB3 0%, #EAA79E 100%)',
                                boxShadow:'0px 15px 20px rgba(234, 168, 159, 0.2)',
                                borderRadius:'50px',
                                padding:'12px 18px',
                                color:"#FFFFFF",
                                lineHeight:"%82",
                                borderRadius:"50px",
                                fontWeight:'500'
            
                            }}  onClick={()=>{
                                dispatch({
                                    type:"ModalHandler",
                                    payload:"Register"
                                })
                            }
                            
                            }>
                                    NewAccount
                            </NavBarItem>

                        </React.Fragment> )
                }
                

        </NavBarItems>

    </React.Fragment>

}


export default DesktopNav;