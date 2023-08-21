import { LOGIN_LOGOUT } from "./Login_LogoutType";

const initialState = {
    stateAccount: false
}

export const setStateAccount = (state = initialState, action) => {
    switch (action.type){
        case LOGIN_LOGOUT:
            return {
                ...state, stateAccount: action.payload    
            }
        default: 
            return state
    }

}