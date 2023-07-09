import './Videos.scss'
import React from 'react';
import Carousel from 'react-grid-carousel';
function Videos({title, videos}) {
    return ( 
    <>
        <div className='wrapperField'>
            <div className='content'>
                <div className='titleName'>
                    {title}
                </div>

                <div className='containerVideos'>
                    <Carousel>

                        {videos.map( (url,index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <iframe width='100%' className='iframe'
                                        src={url}>
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