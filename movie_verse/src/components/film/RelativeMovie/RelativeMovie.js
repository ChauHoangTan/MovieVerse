import React from 'react';
import Carousel from 'react-grid-carousel'
import './RelativeMovie.scss'

function RelativeMovie({title, similars}) {
    return ( 
        <div className='wrapperField relativeMovie'>
            <div className='content'>
                <div className='titleName'>
                    {title}
                </div>
                
                <div className='image mt-3'>
                    <Carousel rows={1} cols={4} loop>
                        {similars.map( (film, index) => {
                            return (
                            <Carousel.Item key={index}>
                                <img className='border border-success-subtle rounded-1' src={`https://image.tmdb.org/t/p/original${film.poster_path}`}/>
                            </Carousel.Item>
                            )
                        })}
                        
                    </Carousel>
                </div>
                
            </div>

            
        </div>
     );
}

export default RelativeMovie;