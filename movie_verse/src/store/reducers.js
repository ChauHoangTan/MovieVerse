import {combineReducers} from 'redux'
import ActorReducer from '../components/actor/Redux/ActorReducer'

export default combineReducers({    
    setIsLoaded: ActorReducer,
})