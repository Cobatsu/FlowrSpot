import React from 'react'
import styled from 'styled-components'

const DropwDownButton = styled.div`

    position:absolute;
    right:15px;
    top:30px;

`
const Logo = styled.div`

    color:#EAA79E;
    fontSize:27px; 
    position:absolute;
    left:20px;
    top:30px;

`

const ResponsiveNav = ()=>{

    return <React.Fragment>

        <Logo>
             FlowrSpot
        </Logo>

        <DropwDownButton>
            <i style={{fontSize:24}} className="fas fa-bars"></i>
        </DropwDownButton>

    </React.Fragment>

}

export default ResponsiveNav;