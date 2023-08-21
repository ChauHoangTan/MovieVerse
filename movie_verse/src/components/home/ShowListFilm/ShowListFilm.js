import React, { useEffect } from 'react';
import './ShowListFilm.scss'
import { useSelector } from 'react-redux';
import Rating from '../../Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function ShowListFilm({title,list,name,type}) {

    const theme = useSelector(state => state.theme.theme);

    useEffect(()=>{
        let items = document.querySelectorAll(`.carousel.${name} .carousel-item`)
      
            items.forEach((el) => {
            
                const minPerSlide = 6
                if(el.childElementCount < minPerSlide){
                    let next = el.nextElementSibling
                    for (var i=1; i<minPerSlide; i++) {
                        if (!next) {
                        // wrap carousel by using first child
                        next = items[0]
                        }
                        let cloneChild = next.cloneNode(true)
                        const idFilm = cloneChild.children[0].getAttribute('data-film-id')
                        console.log(idFilm)
                        cloneChild.children[0].addEventListener('click', () => {
                            navigateToFilmDetails(idFilm)
                        }); 
                        console.log(cloneChild)
                        el.appendChild(cloneChild.children[0])
                        next = next.nextElementSibling
                        
                    }
                }
                
            })
            
    },[])

    const navigate = useNavigate();
    const navigateToFilmDetails = (id) => {
        console.log(id)
        navigate(`${type}/${id}`)
    } 

    return ( 
        <div className={`wrapperShowListFilm ${theme} mt-4`}>
            <div className='containerShowListFilm'>
                <div className='fs-4 fw-bold titleList'>{title}</div>
                <div id={`carousel${name}`} className={`carousel ${name} slide`}>
                    
                    <div className="carousel-inner">
                        {list.map((film, index) => {
                            return(
                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div data-film-id={film.id} onClick={() => navigateToFilmDetails(film.id)}>
                                    <div className='containerInfo'>
                                        <img src={`https://image.tmdb.org/t/p/original${film.poster_path}`} alt="..."/>
                                        <span className='titleFilm m-1'>{type === 'movie' ? film.title : film.name}</span>
                                        <span className='rating'><Rating percent={film.vote_average} width={50} /></span>
                                        <span className='iconPlay'><FontAwesomeIcon icon={faPlay} className='icon'/> </span>
                                        
                                    </div>
                                    
                                    <div className='overlay'></div>
                                </div>   
                            </div>
                            )
                        })}
                        
                    
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${name}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#carousel${name}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
            </div>
            
        </div>
     );
}

export default ShowListFilm;