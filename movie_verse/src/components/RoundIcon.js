import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function RoundIcon({width,icon }) {
    return ( 
    <svg width={width} height={width}>
        <circle cx={width/2} cy={width/2} r={width/2} fill='#1d193e' />
        
        <foreignObject  width={width} height={width}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <FontAwesomeIcon icon={icon} />
            </div>
        </foreignObject>
    </svg> );
}

export default RoundIcon;