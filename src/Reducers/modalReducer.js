
const modalReducer = (state = {},action)=>{
    
    const { type } = action;

    return {
        ...state,
        modalType:type
    }

}

export default modalReducer;