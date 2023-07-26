import React, { useState } from 'react';
import './Toggle.scss'

function Toggle() {

    const urlLightMode = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5-VD3bk-nhAG3Gy0RvT2xKJ1sB1Bh6Qi_w&usqp=CAU';
    const urlNightMode = 'https://img.freepik.com/premium-vector/cute-night-sky-background-with-3d-moon-stars-square-composition_363543-444.jpg?w=2000'
    const [state,setState] = useState(true)

    const handleClickToggle = () => {
        if(state){
            setState(false)
        }else{
            setState(true)
        }
    }
    return ( 
        <div id='ToggleTheme'>
            <div className={`wrapperToggle ${state ? 'active': ''}`} onClick={handleClickToggle}>
                <span className='stateToggle'></span>
                <img src={ state ? urlLightMode : urlNightMode} />
            </div>
        </div>
        
     );
}

export default Toggle;