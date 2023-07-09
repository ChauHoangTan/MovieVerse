import React from 'react';
import Carousel from 'react-grid-carousel';
import './Backdrops.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function Backdrops({title,list,cols}) {
    return ( 
        <div className='wrapperBackdrops'>

            <div className='contentBackdrops'>
                <div className='titleName fw-bold'>{title}</div>

                <div className='mt-3 image'>
                    <Carousel rows={1} cols={cols} gap={0} loop>
                        
                        {list.map( (backdrop, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <img src={backdrop}/>
                                </Carousel.Item>
                            )
                        })}
                        
                    </Carousel>
                </div>
                
            </div>
        </div>
     );
}

export default Backdrops;