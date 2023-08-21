import './Videos.scss'
import React from 'react';
import Carousel from 'react-grid-carousel';
function Videos({title, videos, theme}) {
    return ( 
    <>
        <div className={`wrapperField ${theme}`}>
            <div className='content'>
                <div className='titleName'>
                    {title}
                </div>

                <div className='containerVideos'>
                    <Carousel>

                        {videos.map( (video,index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <iframe width='100%' className='iframe'
                                        src={`https://www.youtube.com/embed/${video.key}`}>
                                    </iframe>
                                </Carousel.Item>
                            )
                        })}
                        
                    </Carousel>
                </div>
                
                

            </div>
        </div>
    </> );
}

export default Videos;