import React, { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'bootstrap';
import BannerMovie from './BannerMovie';
import './Actor.scss'
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import ActorsList from './ActorsList';
import ChangeOption from './ChangeOption/ChangeOption';
import Pagination from '../Pagination/Pagination';
import LoadingEffect from '../LoadingEffect';
import {
    Link,
    NavigationType,
    useLocation,
    useNavigationType
  } from "react-router-dom";


export const ActorContext = createContext();
function Actor() {

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [option,setOption] = useState('trending')
    const [isLoadedBanner, setIsLoadedBanner] = useState(false)
    const [isLoadedActorList, setIsLoadedActorList] = useState(false)
    
    let checkBoth = false
    if(isLoadedBanner && isLoadedActorList ){
        checkBoth = true  
    }
    if(!isLoadedActorList || !isLoadedBanner){
        checkBoth = false
    }


    useEffect(()=>{
        
        const scrollPosition = sessionStorage.getItem('actorList')
        console.log(window.scrollTo(0,parseInt(scrollPosition)))
        
    })


    return  (
       
            <ActorContext.Provider value={{currentPage,setCurrentPage,totalPages,setTotalPages,option,setOption, 
            isLoadedBanner, setIsLoadedBanner, isLoadedActorList, setIsLoadedActorList}}> 
                <div id='containerActor'>
                    <BannerMovie/>
                    {checkBoth ? <ChangeOption /> : ''}
                    
                    <ActorsList />
                    {checkBoth ? <Pagination currentPage={currentPage} totalPages={totalPages} /> : ''}

                    {!checkBoth ? <LoadingEffect /> : ''}
                </div>
            </ActorContext.Provider>

    )
};

export default Actor;