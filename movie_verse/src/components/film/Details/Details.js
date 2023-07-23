import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Details.scss'
import Rating from '../../Rating';
import RoundIcon from '../../RoundIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-grid-carousel';
import ListReaction from './ListReaction';

function Details({details}) {

    const [isHoverActor, setIsHoverActor] = useState(-1)

    const handleHoverOnActor = (index) => {
        setIsHoverActor(index)
    }

    const handleMouseLeaveInActor = () => {
        setIsHoverActor(-1)
    }

    return ( 
        <div className='wrapper'>

            <div className='containerBackground' style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${details.backdropPath}')`}}>
                <div className='setOverlay'></div>
                
            </div>
     
            <div className='details'>
                <div className='avatar'>
                    <img className='border border-primary-subtle rounded-1' src={`https://image.tmdb.org/t/p/original${details.posterPath}`} alt='avatar'/>
                </div>
                <div className='info col'>
                    <div className='info1 row'>
                        <div className='name fw-bold'>{details.name} ( {details.year} )</div>  
                        <div className='slogan fst-italic opacity-75'>Tagline: {details.tagline}!</div>
                        <div className='category fw-bold field'>Category: 
                            {details.category.map((item,index) => {
                                return <span key={index} className='mx-1 my-1 badge text-bg-danger fs-6'>{item.name}</span>
                            })}
                            
                        </div>

                        <div className='rate d-flex align-items-center field'>
                            <div className='rating'>
                                <Rating percent={details.voteAverage} width={50}/>
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
                            <p className='fs-6'>{details.overview}</p>
                        </div>

                        <div className='author'>
                            <div className='field fw-bold'>
                                Director
                            </div>
                            <p className='fs-6'>{details.author.map((person,index) => {
                                if(index === 0){
                                    return person.name
                                }
                                else{
                                    return ", " + person.name
                                }
                            })}</p>
                            
                        </div>
                    </div>
                    
                    {/* phần carousel cho dàn cast */}
                    <div className='info2 row field fw-bold'>
                        <div>Cast</div>

                        <div className='image my-2'>
                        <Carousel cols={4} rows={1} gap={5} loop>

                            {details.cast.map((actor,index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        <div className={`wrapActor ${index === isHoverActor ? "actorHover" : ""}`} onMouseEnter={()=>handleHoverOnActor(index)} onMouseLeave={()=>handleMouseLeaveInActor()}>
                                            <img className='carousel-image rounded-1' src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}/>
                                            <div className={`${index === isHoverActor ? "actorName" : "d-none"} `}>{actor.name}</div>
                                        </div>  
                                    </Carousel.Item>
                                )
                            })}
                            
                            
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