import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';

function RoundIcon({width,icon }) {
    const theme = useSelector(state=>state.theme.theme)
    return ( 
    <svg width={width} height={width}>
        <circle cx={width/2} cy={width/2} r={width/2} fill={theme === "light" ? 'rgba(156, 185, 200,0.7)' : 'rgb(2, 7, 84,0.7)'} />
        
        <foreignObject  width={width} height={width}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <FontAwesomeIcon icon={icon} />
            </div>
        </foreignObject>
    </svg> );
}

export default RoundIcon;