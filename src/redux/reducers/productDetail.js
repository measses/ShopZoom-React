

export const productsDetailReducer = (state={products:{}}, action ) => {
    switch (action.type) {
        case "GET_DETAILS":
            return {
                ...state,
                 product: action.payload
                }
    
        default:
            return state
    }
}