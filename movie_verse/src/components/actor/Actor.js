import React, { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'bootstrap';
import BannerMovie from './BannerMovie';
import './Actor.scss'
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
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


    // lưu giá trị scroll mỗi khi scroll
    // const [scrollY, setScrollY] = useState(0)
    // useEffect(()=>{
    //     setTimeout(()=> {
    //         if(scrollY !== window.scrollY){
    //             setScrollY(window.scrollY)
    //             sessionStorage.setItem('actorList',window.scrollY)
    //         }
    //     }, 2000)
    // },[scrollY])

    // scroll trang ở giá trị trước đó khi khởi động hoặc quay lại từ trang khác
    if ('scrollRestoration' in window.history) {
        // Tắt tính năng scrollRestoration
        window.history.scrollRestoration = 'manual';
        console.log('manual')
      }
    useEffect(()=>{
        
        const handlePopstate = () => {
            // Thực hiện cuộc hành động khi click nút back
            const scrollY = sessionStorage.getItem('actorList')
            window.scrollTo(0, parseInt(scrollY));
          };
        
          window.addEventListener('popstate', handlePopstate());
        
          return () => {
            // Hủy lắng nghe sự kiện khi component unmount
            window.removeEventListener('popstate', handlePopstate);
          };
    },[])


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