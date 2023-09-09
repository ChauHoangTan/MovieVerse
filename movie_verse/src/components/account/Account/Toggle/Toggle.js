import React, { useState } from 'react';
import './Toggle.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setThemeMode } from '../../../themeModeRedux/themeModeAction';
function Toggle() {

    const urlLightMode = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5-VD3bk-nhAG3Gy0RvT2xKJ1sB1Bh6Qi_w&usqp=CAU';
    const urlNightMode = 'https://img.freepik.com/premium-vector/cute-night-sky-background-with-3d-moon-stars-square-composition_363543-444.jpg?w=2000'

    // lấy theme mode hiện tại
    const theme = useSelector(state=>state.theme.theme)
    let stateTheme;
    if(theme === 'light'){
        stateTheme = true
    }else{
        stateTheme = false
    }
    const [state,setState] = useState(stateTheme)

    

    // xử lý sự kiện click toggle
    const dispatch = useDispatch()

    const handleClickToggle = () => {
        if(state === false){
            dispatch(setThemeMode())
            setState(true)
        }else{
            dispatch(setThemeMode())
            setState(false)
        }
    }
    return ( 
        <div id='ToggleTheme' className='d-inline-block'>
            <div className={`wrapperToggle ${state ? 'active': ''}`} onClick={handleClickToggle}>
                <span className='stateToggle'></span>
                <img src={ state ? urlLightMode : urlNightMode} />
            </div>
        </div>
        
     );
}

export default Toggle;