import React from 'react';
import Carousel from 'react-grid-carousel';
import './Backdrops.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function Backdrops({title,images,cols,theme}) {
    return ( 
        <div className={`wrapperBackdrops ${theme}`}>

            <div className='contentBackdrops'>
                <div className='titleName fw-bold'>{title}</div>

                <div className='mt-3 image'>
                    <Carousel rows={1} cols={cols} gap={0} loop>
                        
                        {images.map( (image, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <img src={`https://image.tmdb.org/t/p/original${image.file_path}`}/>
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