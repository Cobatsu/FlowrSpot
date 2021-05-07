
const userReducer = (state = {}, { type , payload })=>{

    switch(type) {

       case "LOG_IN":

            return {
                ...state,
                ...payload,
                isLoggedin:true
            }

       case "LOG_OUT":

            return {
                isLoggedin:false
            }
  
       case "REGISTER": 
            
            return {

                ...state,
                ...payload
            }
            
        
    }

    return state ;
}


export default userReducer;