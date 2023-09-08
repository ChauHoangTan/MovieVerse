import { useNavigate } from 'react-router-dom';
import Rating from '../../components/Rating';
import './Search.scss'

import React from 'react';

function Search({list}) {
    console.log(list)

    const directToDetailsFilm = (id, type) =>{
        window.location.href = (`/${type}/${id}`);
    }

    const directToActorDetails = (id) => {
        window.location.href = (`/actor/${id}`)
    }
    return ( 
        <div className='wrapperSearchList'>
            <div className='containerSearchList'>
                {list.map((film) => {
                    
                    {return film.media_type === 'person' ? 
                    (<div className='wrapItem' onClick={()=>directToActorDetails(film.id)}>
                        <div className='avatar'>
                            <img 
                                src={`https://image.tmdb.org/t/p/original${film.profile_path}`}
                                />
                            
                        </div>
                    

                        <div className='info'>
                            <span>{film.media_type === 'movie' ? film.title : film.name}</span>
                        </div>
                    </div>)
                    :
                    (<div className='wrapItem' onClick={()=>directToDetailsFilm(film.id, film.media_type)}>
                        <div className='avatar'>
                            <img 
                                src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
                                />
                            <div className='rate'>
                                <Rating percent={film.vote_average} width={45} /> 
                            </div>
                        </div>
                    

                        <div className='info'>
                            <span>{film.media_type === 'movie' ? film.title : film.name}</span>
                            <span> {film.media_type === 'movie' ?('Release date:' + film.release_date ): ('First air date:' + film.first_air_date)}</span>
                            <span>Overview: {film.overview}</span>
                            
                        </div>
                    </div>)
                    }
                    
                    
                })}
                
                
            </div>
            <div className='moreResults'>
                More results...
            </div>
        </div>
     );
}

export default Search;