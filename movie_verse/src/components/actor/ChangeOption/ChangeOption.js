import React, { useContext, useState } from 'react';
import './ChangeOption.scss'
import { ActorContext } from '../Actor';

function ChangeOption() {

    const {option, setOption} = useContext(ActorContext)

    const handleClickTrending = () =>{
        if(option === "popular"){
            setOption("trending")
        }
    }

    const handleClickPopular = () =>{
        if(option === "trending"){
            setOption("popular")
        }
    }

    return ( 
        <div className='d-flex justify-content-center'>
            <div className='wrapChangeOption'>
                <span className='mx-2 fs-5 btn text-light fw-bold text-decoration-underline'>People</span>
                <span className='float-end'>
                    <button onClick={handleClickTrending} className={`text-light btn ${option === "trending" ? "btn-danger" : ""}`}>Trending</button>
                    <button onClick={handleClickPopular} className={`text-light btn ${option === "popular" ? "btn-danger" : ""}`}>Popular</button>
                </span>
                
            </div>
        </div>
     );
}

export default ChangeOption;