import React , {useEffect,useState} from 'react';
import styled from 'styled-components'
import Nav from './nav/index'
import Card from './flowerCards'
import PopUp from './modals/index' 

const CardListHolder = styled.div`

    width:100%;
    display:flex;
    flex-wrap:wrap;
    margin:0 auto;
    padding:25px 0;
    justify-content:center;
`

const HomeScreen = ()=>{

    const [flowersState,setFlowers] = useState();

    useEffect(async ()=>{ 
       
           const res = await fetch("https://flowrspot-api.herokuapp.com/api/v1/flowers/random");

           const { flowers } = await res.json();

           setFlowers(flowers.slice(0,8))

    },[])   

    return  <React.Fragment>

            <Nav/>

            <PopUp/>
            
            <CardListHolder>

                {
                    flowersState && flowersState.map((flower)=>{

                        return <Card {...flower} key={flower.id}/>
                                
                    })
                }

            </CardListHolder>
            
        </React.Fragment>
       
   

} 


export default HomeScreen;