import React , {useEffect,useState} from 'react';
import Responsive from './responsive-nav'
import Desktop from './desktop-nav'
import styled from 'styled-components'

const NavContainer = styled.div`

    font-family: Montserrat;
    font-style: normal;
    width:100%;
    height:80px;
    display:flex;
    justify-content:space-between;
    background: #FFFFFF;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
    position:relative;
`

const useViewport = () => {

    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    return { width };
}

const Nav = ()=>{

    const { width } = useViewport();
    const breakPoint = 1055;

    return <NavContainer>

            {
                width < breakPoint ? (
                    <Responsive/>
                ) : ( 
                    <Desktop/>
                )
            }

    </NavContainer>

}

export default Nav ;