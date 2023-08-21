import { TOGGLE_THEME_MODE } from "./themeModeTypes";

const initialState = {
    theme: localStorage.getItem('theme') || 'light',
}

const themeReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_THEME_MODE:
            state.theme === 'light' ? localStorage.setItem('theme','dark') : localStorage.setItem('theme','light')
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            }
        default:
            return state
    }
}

export default themeReducer;