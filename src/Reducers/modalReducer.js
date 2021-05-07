
const modalReducer = (state = {},action)=>{
    
    const { type , payload } = action;

    if(type === "ModalHandler" ) {
        return {
            ...state,
            modalType:payload
        }
    }

    return state;

}

export default modalReducer;