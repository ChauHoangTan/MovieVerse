import {combineReducers} from 'redux'
import ActorReducer from '../components/actor/Redux/ActorReducer'
import themeReducer from '../components/themeModeRedux/themeModeReducer'
import { setStateAccount } from '../components/account/LogIn/redux/Login_LogoutReducer'
export default combineReducers({    
    setIsLoaded: ActorReducer,
    theme: themeReducer,
    stateAccount: setStateAccount
})