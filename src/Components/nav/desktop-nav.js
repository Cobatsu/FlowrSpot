import React , {useState,useEffect} from 'react'
import styled  from 'styled-components'
import {useDispatch}  from 'react-redux'

const NavBarItems = styled.div`

    display:flex;   
    justify-content:space-around;
    align-items:center;
    width:700px;
`

const NavBarItem = styled.span`


    display:flex;
    align-items:center;
    justify-content:center;
    font-size:16px;
    color:#949EA0
    width:140px;
    &:hover{
        cursor:pointer;
    }

`

const DesktopNav = ()=>{

    const dispatch = useDispatch()

    return <React.Fragment>

        <NavBarItems style={{color:"#EAA79E",justifyContent:"flex-start",fontSize:"20px",boxSizing:"border-box",paddingLeft:30}} >

            FlowrSpot

        </NavBarItems>   

        <NavBarItems style={{marginRight:"40px"}}>

                <NavBarItem>
                        Flowers
                </NavBarItem>

                <NavBarItem>
                        Latest Sightings
                </NavBarItem>

                <NavBarItem>
                        Favorites
                </NavBarItem>

                <NavBarItem 
                    style={{color:"#DF9186"}}     
                    onClick={ ()=>{
                        dispatch({
                            type:"Login"
                        })
                    }} >
                        Login
                </NavBarItem>

                <NavBarItem style={{

                    background:'linear-gradient(270deg, #ECBCB3 0%, #EAA79E 100%)',
                    boxShadow:'0px 15px 20px rgba(234, 168, 159, 0.2)',
                    borderRadius:'50px',
                    padding:'12px 20px',
                    color:"#FFFFFF",
                    lineHeight:"%82",
                    borderRadius:"50px",
                    fontWeight:'500'

                }}  onClick={()=>{
                        dispatch({
                            type:"Register"
                        })
                }
                
                }>
                        NewAccount
                </NavBarItem>

        </NavBarItems>

    </React.Fragment>

}


export default DesktopNav;