import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ActorDetails.scss'
import ActorInfo from './ActorInfo';
import FilmCredits from './FilmCredits/FilmCredits';
import RankedCredit from './RankedCredits/RankedCredits';
import LoadingEffect from '../LoadingEffect';

function ActorDetails() {
    const {id} = useParams();
    const APIkey = 'a50a061b1989216e2c7931d35fc20896';
    const gender = ["Not set / not specified","Female","Male","Non-binary"]
    const [isLoaded, setIsLoaded] = useState(false)
    const [actorDetails, setActorsDetails] = useState(null)

    
    
    useEffect(()=>{
        const fetchData = async () =>{
            return getDataActorFromAPI(id)
            
        }

        fetchData().then((result) => {
            console.log("Promise fulfilled:", result);
            setIsLoaded(true)
            setActorsDetails(result)
            console.log(result)
        }).catch((error)=>{
            console.error("Promise rejected:", error);
        })

        console.log(window.scrollTo(0,0))
    },[])

    const getDataActorFromAPI = async (actorId) => {
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/person/${actorId}?api_key=${APIkey}&append_to_response=movie_credits,tv_credits,combined_credits`)
            const result = response.data
            //console.log(results)
            return result
        }catch(error){
            console.log(error)
        }
        
    }

    return ( 

        <>
            {isLoaded ? (
                <div className='containerActorDetails'>

                    <div className='wrapActorDetails'>
                        <div className='actorDetails'>
                            <div className='d-flex align-items-center'>
                                <div className='parentAvatar d-flex justify-content-center bg-dark rounded-2'>
                                    <div className='avatar'><img src={`https://image.tmdb.org/t/p/original${actorDetails.profile_path}`}/></div>
                                </div>
                            </div>
                            
                            <div className='parentDetails d-flex align-items-center bg-dark rounded-2'>
                                <div className=' d-flex justify-content-center'>
                                    <div className='details'>
                                        <ActorInfo Actor={actorDetails} />
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>

                        <div className='credit'>
                            <div className='rankedCredit'>
                                <RankedCredit Title={"Ranked Media"} ListCredit={actorDetails.combined_credits.cast}/>
                            </div>
                            <div className='movieCredit'>
                                <FilmCredits Title={"Movie Media"} ListCredit={actorDetails.movie_credits.cast} />
                            </div>
                            <div className='tvCredit'>
                                <FilmCredits Title={"TV Media"} ListCredit={actorDetails.tv_credits.cast} />
                            </div>
                        </div>
                    </div>
                    

                    
                </div>
            ) : <LoadingEffect />}
        </>
        
     );
}

export default ActorDetails;