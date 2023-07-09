import React from 'react';
import Carousel from 'react-grid-carousel'
import './RelativeMovie.scss'

function RelativeMovie({title, list}) {
    return ( 
        <div className='wrapperField relativeMovie'>
            <div className='content'>
                <div className='titleName'>
                    {title}
                </div>
                
                <div className='image mt-3'>
                    <Carousel rows={1} cols={4}>
                        {list.map( (item, index) => {
                            return (
                            <Carousel.Item key={index}>
                                <img className='border border-success-subtle rounded-1' src={item}/>
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