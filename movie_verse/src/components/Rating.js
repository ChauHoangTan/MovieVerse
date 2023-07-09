import React from 'react';

function Rating({percent, width}) {

    const dashArray = 2 * Math.PI * 20;
    const dashOffset = dashArray - (dashArray*percent)/10

    return ( 
        <>
            <svg width={width} height={width}>
                <circle className='circleBackground' cx={width/2} cy={width/2} r={20} strokeWidth="5px"/>

                <circle className='progressBar' cx={width/2} cy={width/2} r={20} strokeWidth="5px"
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset
                    }}
                    transform={`rotate(-90 ${width/2} ${width/2}) `}
                />

                <text x="50%" y="50%" dy="0.3em" textAnchor="middle" className='textRating' fill='#cbecf5'>{percent}</text>
            </svg>
        </>
     );
}

export default Rating;