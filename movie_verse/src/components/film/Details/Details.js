import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Details.scss'
import Rating from '../../Rating';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

import ListReaction from './ListReaction';
import { useEffect } from 'react';

function Details({details, theme}) {

    console.log(details)

    const [isHoverActor, setIsHoverActor] = useState(-1)

    const handleHoverOnActor = (index) => {
        setIsHoverActor(index)
    }

    const handleMouseLeaveInActor = () => {
        setIsHoverActor(-1)
    }

    useEffect(()=>{
        let items = document.querySelectorAll(`.carousel.film .carousel-item`)

            items.forEach((el) => {
            
                const minPerSlide = 4
                if(el.childElementCount < minPerSlide){
                    let next = el.nextElementSibling
                    for (var i=1; i<minPerSlide; i++) {
                        if (!next) {
                        // wrap carousel by using first child
                        next = items[0]
                        }
                        let cloneChild = next.cloneNode(true)
                        el.appendChild(cloneChild.children[0])
                        next = next.nextElementSibling
                        
                    }
                }
                
            })
            
    },[])

    return ( 
        <div className={`wrapper ${theme}`}>

            <div className='containerBackground' style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${details.backdropPath}')`}}>
                <div className='setOverlay'></div>
            </div>
     
            <div className='details'>
                <div className='backdrop'>
                    <img className='border border-primary-subtle rounded-1' src={`https://image.tmdb.org/t/p/original${details.backdropPath}`} alt='avatar'/>
                    <div className='overlayBackdrop'></div>
                </div>
                <div className='avatar'>
                    <img className='border border-primary-subtle rounded-1' src={`https://image.tmdb.org/t/p/original${details.posterPath}`} alt='avatar'/>
                </div>
                <div className='info'>
                    <div className='info1'>
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
                    <div className='field fw-bold'>
                        Caster
                    </div>
                    <div id={`carouselFilm`} className={`carousel film slide`}>
                    
                        <div className="carousel-inner">
                            {details.cast.map((actor, index) => {
                                return(
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <div >
                                        <div className='containerInfo'>
                                            <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt="..."/>
                                            <span className='actorName'>{actor.name}</span>
                                        </div>
                                        
                                        <div className='overlay'></div>
                                    </div>   
                                </div>
                                )
                            })}
                            
                        
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#carouselFilm`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carouselFilm`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                            
                    </div>
                    
                </div>
            </div>
            
            
        </div>
     );
}

export default Details;