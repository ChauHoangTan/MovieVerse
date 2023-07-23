import React from 'react';
import Carousel from 'react-grid-carousel'
import './RelativeMovie.scss'
import { useState } from 'react';

function RelativeMovie({title, similars}) {

    const [isHoverActor, setIsHoverActor] = useState(-1)

    const handleHoverOnActor = (index) => {
        setIsHoverActor(index)
    }

    const handleMouseLeaveInActor = () => {
        setIsHoverActor(-1)
    }

    return ( 
        <div className='wrapperField relativeMovie'>
            <div className='content'>
                <div className='titleName'>
                    {title}
                </div>
                
                <div className='image mt-3'>
                    <Carousel rows={1} cols={4} loop>
                        {similars.map( (film, index) => {
                            if(film.poster_path !== null){
                                return (
                                    <Carousel.Item key={index}>
                                        <div className={`wrapRelativeMovie ${isHoverActor === index ? "relavetiveMovieHover" : ""}`}>
                                            <img className='' src={`https://image.tmdb.org/t/p/original${film.poster_path}`}/>
                                        </div>
                                        
                                    </Carousel.Item>
                                    )
                            }
                            
                        })}
                        
                    </Carousel>
                </div>
                
            </div>

            
        </div>
     );
}

export default RelativeMovie;