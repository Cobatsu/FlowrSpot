
export const signIn = ( { token , user } )=>{

    localStorage.setItem('token',token);

    return {

        type:"LOG_IN",
        payload:user

    }

}

export const signOut = ()=>{


    localStorage.removeItem('token');

    return {

        type:"LOG_OUT",

    }

}