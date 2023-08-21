import React, { useContext, useState } from 'react';
import './ChangeOption.scss'
import { ActorContext } from '../Actor';
import { UseSelector, useSelector } from 'react-redux';
function ChangeOption() {

    const {option, setOption} = useContext(ActorContext)

    const theme = useSelector(state => state.theme.theme)

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
        <div className={`d-flex justify-content-center containerWrapChangeOption ${theme}`}>
            <div className={`wrapChangeOption`}>
                <span className={`mx-2 fs-5 btn fw-bold text-decoration-underline ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>People</span>
                <span className='float-end'>
                    <button onClick={handleClickTrending} className={`${theme === 'dark' ? 'text-light' : 'text-dark'}
                                                        btn ${option === "trending" ? "btn-danger" : ""}`}>Trending</button>
                    <button onClick={handleClickPopular} className={`${theme === 'dark' ? 'text-light' : 'text-dark'}
                                                        btn ${option === "popular" ? "btn-danger" : ""}`}>Popular</button>
                </span>
                
            </div>
        </div>
     );
}

export default ChangeOption;