import { COMPONENT_BANNER_LOADED, COMPONENT_ACTOR_LIST_LOADED } from "./ActionTypes"

const setIsLoadedBanner = (isLoaded) => {
    return {
        type: COMPONENT_BANNER_LOADED,
        payload: isLoaded
    }
}   
const setIsLoadedActorList = (isLoaded) => {
    return {
        type: COMPONENT_ACTOR_LIST_LOADED,
        payload: isLoaded
    }
}   

export {setIsLoadedBanner,setIsLoadedActorList}