import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux'

const CardContainer = styled.div`

    width:280px;
    height:350px;
    display:flex;
    align-items:flex-end;
    background: ${({image})=>`url(${image}) no-repeat center center `}; 
    background-size: cover;
    position:relative;
    border-radius:3px;
    margin:10px;
 
`

const Layer = styled.div`

    z-index:2;
    width:100%;
    height:100%;
    background:red;
    position:absolute;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.7) 89.5%);

`

const InnerFields = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    z-index:3;
    color:#FFFFFF;
    min-height:150px;

`
const Star = styled.div`
    
    position: absolute;
    right: 7.14%;
    top: 5.71%;
    color:white;


`

const Sighting = styled.div`

    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    padding:5px 25px;
    margin-top:25px;
    font-size:12px;

`

const Name = styled.div`
    font-size:20px;
`

const Latin_Name = styled.div`
    font-family: 'Ubuntu', italic;
    font-size:12px;
`

const Card = ( {profile_picture, name, latin_name, sightings,favorite})=>{

    const starVisible = useSelector( store => store.user.isLoggedin)

    return <CardContainer image={profile_picture} >

        <Layer/>

        {
            starVisible && <Star> <i style={{fontSize:18}} className="far fa-star"></i> </Star>
        }

        <InnerFields>

            <Name> {name} </Name>
            <Latin_Name> {latin_name} </Latin_Name>

            <Sighting>

                {sightings} sightings

            </Sighting>

        </InnerFields>


    </CardContainer>

}


export default Card;