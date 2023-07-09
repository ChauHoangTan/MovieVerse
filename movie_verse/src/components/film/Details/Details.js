import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Details.scss'
import Rating from '../../Rating';
import RoundIcon from '../../RoundIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-grid-carousel';
import ListReaction from './ListReaction';

function Details() {

    return ( 
        <div className='wrapper'>

            <div className='containerBackground'>
                <div className='setOverlay'>
                </div>
                
            </div>
     
            <div className='details'>
                <div className='avatar'>
                    <img className='border border-primary-subtle rounded-1' src='https://images2.thanhnien.vn/Uploaded/nhuvnq/2022_12_09/02-8374.jpg' alt='avatar'/>
                </div>
                <div className='info col'>
                    <div className='info1 row'>
                        <div className='name fw-bold'>Wednesday ( 2022 )</div>  
                        <div className='slogan fst-italic opacity-75'>Slogan: have fun for next day!</div>
                        <div className='category fw-bold field'>Category: 
                            <span className='mx-2 my-1 badge text-bg-danger fs-6'>Action</span>
                            <span className='mx-2 my-1 badge text-bg-danger fs-6'>Action</span>
                        </div>

                        <div className='rate d-flex align-items-center field'>
                            <div className='rating'>
                                <Rating percent={7.5} width={50}/>
                            </div>
                            
                            <span className='play mx-3 p-2 d-flex align-items-center btn btn-success'>
                                <FontAwesomeIcon icon={faCirclePlay} className='text-light fs-4' />
                                <span className='fs-6 mx-2'>Watch now</span>
                            </span>
                        </div>

                        <ListReaction/>

                        <div className='overview field'>
                            <div className='fw-bold'>
                                Overview
                            </div>
                            <div className='fs-6'>
                            Thông minh, hay châm chọc và "chết trong lòng" một chút, 
                            Wednesday Addams điều tra một vụ giết người liên hoàn trong khi có thêm bạn và cả kẻ thù mới học Học viện Nevermore.
                            </div>
                        </div>

                        <div className='author'>
                            <div className='field fw-bold'>
                                Author
                            </div>
                            <div className='fs-6'>Châu Hoàng Tấn</div>
                            
                        </div>
                    </div>
                    
                    {/* phần carousel cho dàn cast */}
                    <div className='info2 row field fw-bold'>
                        <div>Cast</div>

                        <div className='image my-2'>
                        <Carousel cols={4} rows={1} gap={5} loop>
                            <Carousel.Item>
                                <img className='carousel-image rounded-1' src='https://cdn.britannica.com/56/243656-050-2E4A5036/Jenna-Ortega-2023.jpg'/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='carousel-image rounded-1' src='https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT_-iChxn42ud1RxIIJp6TOzx-1aZNqLq7tN2YaZ7a4fhiAb1GZbKnW3JCTXnI5tnqM'/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='carousel-image rounded-1' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSwv9COLsH5UDLazBxj5B1Jl67hYCRmZqhr_d5ZPccZzPDMY-tH'/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='carousel-image rounded-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEkoIYAuXtfZzizSht2cXdmCdcobEQJ7VuCv6v-97-JBJSJTf'/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='carousel-image rounded-1' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTk9dN8WPvyOFrl5fOhs8ejWhsGyRERJWOMNvVXCDJdfkAwDzy7'/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='carousel-image rounded-1' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRNL0o0ZaORWWJWy-_ktZZ42HujG_X9l2Zza_Uu1BrK4NQQxOG'/>
                            </Carousel.Item>
                        </Carousel>
                            {/* <img className='me-3 rounded-1' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRNL0o0ZaORWWJWy-_ktZZ42HujG_X9l2Zza_Uu1BrK4NQQxOG'/> */}
                        </div>

                        

                        
                    </div>
                    
                </div>
            </div>
            
            
        </div>
     );
}

export default Details;