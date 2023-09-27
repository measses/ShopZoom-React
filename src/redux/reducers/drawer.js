
export const drawerReducer = (state = {drawer: false}, action) => {
    switch (action.type) {
        case "DRAWER":
            return {drawer: action.payload}
            
            break;
    
        default:
            return state
    }
  }
