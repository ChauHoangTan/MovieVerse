import React from 'react';

function ActorInfo({Actor}) {
    return ( 
        <>
            <div className='fs-4 fw-bold'>{Actor.name}</div>
            <div className='field'><span className='text-danger fw-bold text-decoration-underline'>Birthday: </span><span className='info'>{Actor.birthday}</span></div>
            <div className='field'><span className='text-danger fw-bold text-decoration-underline'>Known for department: </span><span className='info'>{Actor.known_for_department}</span></div>
            <div className='field'><span className='text-danger fw-bold text-decoration-underline'>Overview: </span><span className='info'>{Actor.biography}</span></div>
        </>
     );
}

export default ActorInfo;