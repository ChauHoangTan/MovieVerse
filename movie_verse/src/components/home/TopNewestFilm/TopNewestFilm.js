import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import './TopNewestFilm.scss';
import Category from './Category';
import Rating from '../../Rating';

import "@fontsource/inter"; // Defaults to weight 400
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';





function TopNewestFilm({list, genres}) {

    const theme = useSelector(state => state.theme.theme);

    const navigate = useNavigate()

    const findGenreName = (id) => {
        
        for(let i = 0; i < genres.length; i++){
            if(id === genres[i].id){
                return genres[i].name
            }
        }
    }

    const navigateToFilmDetails = (id) => {
        navigate(`/movie/${id}`)
        
    }



    return (
        // <div className='containerTopNewestFilm' style={{ height: '100%' }}>
        //     <Carousel auto>
        //         {show}
        //     </Carousel>
        // </div>
        <div className={`containerTopNewestFilm ${theme}`}>
            <div id="carouselExampleCaptions" className="carousel slide">
                
                <div className="carousel-inner">
                    {list.map((movie, index) => {
                        return (
                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="d-block w-100" alt="..."/>
                                <div className='wrapInfoMovie'> 
                                    <div className='info'>
                                        <div>
                                            <span className='fw-bold titleFilm d-inline-block'>{movie.original_title} {movie.release_date.slice(0,4)}</span>
                                        </div>

                                        <div className='infoOverflow'>
                                            <div className='mt-1'>

                                                {movie.genre_ids.map((genre) => {
                                                    let genreName = findGenreName(genre)

                                                    return (
                                                        <span className='bg-danger rounded-3 me-2 mt-2 px-2 py-1 d-inline-block'> {genreName} </span>
                                                    )
                                                })}
                                            </div>  
                                            <div className='mt-3 overview'>
                                                <span className='opacity-75'>{movie.overview}</span>

                                            </div>
                                        </div>    
                                        
                                          
                                        
                                        <div className='mt-3'> 
                                            <Rating percent={movie.vote_average} width={55} />
                                            <span className='btn btn-success ms-2' onClick={()=>navigateToFilmDetails(movie.id)}>
                                                <FontAwesomeIcon icon={faPlay} />
                                                <span className='ms-2 viewDetails'>View Details</span>
                                            </span>   
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className='overlay'> </div>
                            </div>
                        )
                    })}
                    
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    );
}

export default TopNewestFilm;