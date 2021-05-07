import React , {useState} from 'react';
import styled from 'styled-components';
import { TextField , Button } from '@material-ui/core';
import { useFormik } from 'formik';
import {validate} from 'email-validator'
import {signIn} from '../../actions/userActions'
import {useDispatch,useSelector} from 'react-redux'

const ModalContainer = styled.div`

    position:fixed;
    display:flex;
    flex-direction:column;
    align-items:stretch;
    width: 440px;
    height: 290px;
    top: 50%;
    left: 50%;
    margin-top: -20px;
    margin-left: -250px;
    padding:15px 25px 20px 25px ;
    box-sizing:border-box;
    top:25%;
    background:#FFFFFF;
    z-index:1001;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
    border-radius: 3px;

`
const Transition = styled.div`

display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
height:100%;

`

//I am exporting these declarations because they will be used again in other components

export const SubmitButton = styled.button`

    border:none;
    background: linear-gradient(270deg, #ECBCB3 0%, #EAA79E 100%);
    box-shadow: 0px 15px 20px rgba(234, 168, 159, 0.2);
    border-radius: 3px;
    color:#FFFFFF;
    font-weight: 500;
    font-size: 14px;
    padding:22px;
    &:hover{
        cursor:pointer;
    }

`
export const Title = styled.span` 
    font-weight:500;
    font-size:20px;
    text-align:center;
    margin-bottom:5px;
`
export const Fields = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`
export const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:100%;
    width:100%;
`


const validateStageValues = values => {
    let errorStore = {};
    let { email , password } = values; 

    if (!email) {

        errorStore.email = "This Field Can Not Be Blank!"

    } 

    if (!password) {

        errorStore.password = "This Field Can Not Be Blank!"

    } 

    const isValid = validate(email);

    if(!isValid) {
        errorStore.email = "Wrong Format ! "
    }
    
    return errorStore;
}

const LoginModal = (props)=>{

    const dispatch = useDispatch(); 
    const isLoggedIn = useSelector(store => store.user.isLoggedin);
    const [loginError,setLoginError] = useState(null);

    const formik = useFormik({ // Here, We dont need to "DECLARE" and "HANDLE" our own state to store data  because useFormik already does it for us ! .

        initialValues:{
            email:'',
            password:''
        },
        onSubmit:async (stagedData , {validateForm}) => {

            validateForm(stagedData); // validating values before the submit 

            try {

                const tokenResponse = await fetch("https://flowrspot-api.herokuapp.com/api/v1/users/login",{
                    method:"POST",
                    body:JSON.stringify(stagedData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                
                const { auth_token , error:loginError } = await tokenResponse.json();

                if(loginError) {
                    setLoginError(loginError)
                    return;
                }

                const userResponse = await fetch("https://flowrspot-api.herokuapp.com/api/v1/users/me",{
                    headers:{ "Authorization":auth_token}
                    
                })
                const { user } =  await userResponse.json() // we immediately fetch the current logged in user
                dispatch(signIn({token:auth_token,user})); // We are gonna set the user in global statE

            } catch(err) {
                
                setLoginError(err)

            }
        
        },
        validate:validateStageValues,
        validateOnChange:false,
        validateOnBlur:false
        
    })

    return <ModalContainer>

        {  
            isLoggedIn ? (  
                
                <Transition>

                        <span>
                              "Congratulations! You have successfully logged into FlowrSpot!"                             
                        </span>

                        <div>
                                 <Button onClick={() => dispatch({ type: "ModalHandler", payload: "" })} style={{ marginRight: 8 , width:'85px' }} variant="contained" color="primary"> OK </Button>
                                 
                                 <Button onClick={() => dispatch({ type: "ModalHandler", payload: "Logout" })}  style={{  width:'85px' }} variant="contained" color="primary"> PROFILE </Button>

                        </div>

                </Transition>
          
            
            ) : 
            
           (  <React.Fragment>

             <Title> Welcome Back </Title>

             <Form onSubmit={formik.handleSubmit}>

                <Fields>

                    <TextField 
                        style={{marginTop:8}} 
                        label="Email Address" 
                        variant="outlined"
                        name="email"
                        onChange={formik.handleChange} 
                        value={formik.values.email}
                        error={formik.errors.email || loginError } />

                    { /* It is great fun to use customized inputs provided by material UI ! */}

                    <TextField  
                        style={{marginTop:10}}   
                        label="Password" 
                        variant="outlined"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={formik.errors.password || loginError}  />


                </Fields>

                <SubmitButton type="submit" > Login to your Account </SubmitButton>

            </Form>

      </React.Fragment> )
}

          
    </ModalContainer>

}

export default LoginModal;

