import React, { useState, useEffect, useContext } from 'react';
import './Actor.scss'
import axios from 'axios';
import {ActorContext} from './Actor'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoadedActorList } from './Redux/ActorAction';
import { useLocation } from 'react-router-dom';

function ActorsList() {

    const APIkey = 'a50a061b1989216e2c7931d35fc20896';

    const [actorsList, setactorsList] = useState(null)
    const {currentPage,setTotalPages,option,isLoadedActorList, setIsLoadedActorList} = useContext(ActorContext)

    useEffect(() => {
        // Bật tính năng scroll restoration
        window.history.scrollRestoration = 'auto';
      }, []);

    useEffect(() => {
        const fetchData = async () =>{
            const newActorsList = (await getactorsList(currentPage))
            if(newActorsList){
          
                setIsLoadedActorList(true)
                
            }else{
          
                setIsLoadedActorList(false)
        
            }
        }
        fetchData();
    },[currentPage,option])

    

    const getactorsList = async (page) => {
        try{
        
            let response;
            if(option === "trending"){
                response = await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=${APIkey}&language=en-US&page=${page}`)
            }else{
                response = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${APIkey}&page=${page}`)
            }
            const results = response.data.results
   
            setactorsList(results)
            
            setTotalPages(response.data.total_pages)   

            return true
           
        }catch(error){
            console.log(error)
            return false
        }
    }

    // chuyển sang trang actor details 
    const navigate = useNavigate()
    const handleClickActor = (id) => {
        navigate(`/actor/${id}`)
        // Lưu vị trí của trang actor khi sang actorDetails
        sessionStorage.setItem('actorList', window.scrollY)
    }
    
    
    return ( 
        <>
        {isLoadedActorList ? (
            <div className='containerActorsList'>
                <div className='wrapActorsList'>
                    {
                        actorsList.map((actor) => {
                            return (
                                <div className='wrapActor' onClick={()=>handleClickActor(actor.id)}>
                                    <img className='' src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} />
                                    <div className='bg-secondary text-light actorName'>{actor.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
        ) : ''}
        </>
        
        
     );
}

export default ActorsList;