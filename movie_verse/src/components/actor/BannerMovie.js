import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Carousel from 'react-grid-carousel';
import Rating from '../Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import {ActorContext} from './Actor'
import { useDispatch, useSelector } from 'react-redux';


function ActorsList() {
    const APIkey = 'a50a061b1989216e2c7931d35fc20896';
    let indexactorsList = -1;

    const [genresMovie, setGenresMovie] = useState(null)
    const [genresTV, setGenresTV] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [actorsList, setactorsList] = useState(null)
    const {currentPage,option,isLoadedBanner, setIsLoadedBanner} = useContext(ActorContext)

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () =>{
            const newGenresMovie = await getGenresMovie()
            const newGenresTV = await getGenresTV()
            const newActorsList = await getactorsList(currentPage,option)
            
            if(newGenresMovie && newGenresTV && newActorsList)
            {
        
                setIsLoadedBanner(true)
                
            }else{
         
                setIsLoadedBanner(false)
                
            }
            
        };
        
        fetchData();
    },[currentPage,option])


    const getGenresMovie = async () => {
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${APIkey}&language=en`)
            const results = response.data.genres
            setGenresMovie(results)
            return true
        }catch(error) {
            console.log(error)
            return false
        }
    }

    const getGenresTV = async () => {
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${APIkey}&language=en`)
            const results = response.data.genres
            setGenresTV(results)
            return true
        }catch(error) {
            console.log(error)
            return false
        }
    }

    const getactorsList = async (page,option) => {
        try{
            let response;
            if(option === "trending"){
                response = await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=${APIkey}&language=en-US&page=${page}`)
            }else{
                response = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${APIkey}&page=${page}`)
            }
            
            const results = response.data.results       
            setactorsList(results)
            return true
            
        }catch(error){
            console.log(error)
            return false
        }
    } 
    
    
    const findNameGenreById = (id, mediaType) => {
        //console.log(Object.keys(genres).length)
        if(mediaType === 'movie'){
            for(let i = 0; i < Object.keys(genresMovie).length; i++){
                if(genresMovie[i].id === id){
                    return genresMovie[i].name
                }
            }
        }else{
            for(let i = 0; i < Object.keys(genresTV).length; i++){
                if(genresTV[i].id === id){
                    return genresTV[i].name
                }
            }
        }
        
    }

    
    return ( 
        
    <>
        {isLoadedBanner ? (
            <div className='wrapBanner'>         
                <div className='containerBanner'>
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            {actorsList.map((actor) => {
                                return(
                                    actor.known_for.map((movie) => {
                                        indexactorsList += 1;
                                        if (movie.backdrop_path !== null){
                                            return (
                                                <>
                                                    <div className={`carousel-item ${indexactorsList === 0 ? "active" : ""}`}>
    
    
                                                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="d-block w-100" alt="..." />
                                                        <div className='descriptionMovie'>

                                                            <div className='wrapMovieDetailsAndActorAvatar'>

                                                                <div className='movieDetails'>
                                                                    <div>
                                                                        <div className='titleMovie'>{movie.media_type ==="movie" ? movie.title : movie.name}</div>
                                                                        <div className='genres'>
                                                                            {/* {findNameGenreById(1)} */}
                                                                            {movie.genre_ids.map((category) => {
                                                                                return <div className='btn btn-danger me-2 border border-danger rounded-5'>{findNameGenreById(category,movie.media_type)}</div>
                                                                            })}
                                                                        </div>
                                                                        <div className='my-3 overview'>{movie.overview}</div>
                                                                        <div className='my-3 '>
                                                                            <Rating percent={movie.vote_average} width={45}/> 
                                                                            <button className='mx-3 btn btn-danger text-light border border-3 border-danger play'>
                                                                                <FontAwesomeIcon className='me-2' icon={faPlay}/>Watch now</button>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>

                                                                <div className='actorAvatar'>
                                                                    <div>
                                                                        <img className='z-1' src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}/>
                                                                        <span className='actorName'>{actor.name}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                                                                
                                                        </div>
                                                    </div>
                                                    
                                                </>
                                            )
                                        }
                                        
                                    })
                                )
                            })}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className='overlay'></div>
                </div>        
            </div>) : 
            
            ''
        }
                
           
    
    </> 
    );
}

export default ActorsList;