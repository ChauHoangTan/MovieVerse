import React from 'react';
import Carousel from 'react-grid-carousel'
import './RelativeMovie.scss'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function RelativeMovie({title, similars, theme}) {

    const [isHoverActor, setIsHoverActor] = useState(-1)

    const handleHoverOnActor = (index) => {
        setIsHoverActor(index)
    }

    const handleMouseLeaveInActor = () => {
        setIsHoverActor(-1)
    }

    const {type} = useParams()

    const moveToAnotherFilm = (id) => {
    
        window.location.replace(`/MovieVerse/${type}/${id}`)

    }

    return ( 
        <div className={`wrapperField relativeMovie ${theme}`}>
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
                                        <div className={`wrapRelativeMovie ${isHoverActor === index ? "relavetiveMovieHover" : ""}`}
                                            onClick={()=>moveToAnotherFilm(film.id)}>
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