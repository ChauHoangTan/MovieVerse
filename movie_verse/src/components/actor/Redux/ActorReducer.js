import { COMPONENT_BANNER_LOADED, COMPONENT_ACTOR_LIST_LOADED } from "./ActionTypes"

const initialState = {
    isLoadedBanner: false,
    isLoadedActorList: false,
}

const ActorReducer = (state = initialState, action) => {
    switch(action.type){
        case COMPONENT_BANNER_LOADED:
            return {
                ...state,
                isLoadedBanner: action.payload,
            };

        case COMPONENT_ACTOR_LIST_LOADED:
            return {
                ...state,
                isLoadedActorList: action.payload,
            };
        default:
            return state;
    }
}

export default ActorReducer;