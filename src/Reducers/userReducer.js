
const userReducer = (state = {}, { type , payload })=>{

    switch(type) {

       case "LOG_IN":
            return {
                ...payload,
                isLoggedin:true
            }
       case "LOG_OUT":
            return {

                isLoggedin:false
            }
        default:            
            return state ;
        break;
        
    }
}


export default userReducer;