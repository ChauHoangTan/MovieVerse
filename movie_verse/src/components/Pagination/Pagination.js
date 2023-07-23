import React, { useContext, useEffect, useState } from 'react';
import './Pagination.scss'
import {ActorContext} from '../actor/Actor.js'

function Pagination() {
    const {currentPage,setCurrentPage,totalPages,setTotalPages} = useContext(ActorContext)

    const [arrPages, setArrPages] = useState([])
    useEffect( () => {
        handlePaginate()
    },[currentPage, totalPages])

    const handlePaginate = () => {
        let newArrPages = []
        newArrPages.push(1)

        // thêm 2 trang trước của current
        for( let i = 2; i > 0; i--){
            if(currentPage - i > 1){
                newArrPages.push(currentPage-i)
            }
        }

        if(currentPage !== 1 && currentPage !== totalPages)
            newArrPages.push(currentPage)

        // thêm 2 trang sau của current
        for( let i = 1; i < 3; i++){
            if(currentPage + i < totalPages){
                newArrPages.push(currentPage+i)
            }
        }

        newArrPages.push(totalPages)
        setArrPages(newArrPages)
    }

    const handlePrev = () =>{
        if(currentPage > 1){
            setCurrentPage(currentPage-1)
            handleScroll()
        }       
    }

    const handleNext = () => {
        if(currentPage < totalPages){
            setCurrentPage(currentPage+1)
            handleScroll()
        }   
    }

    const handleSelectPage = (index) => {
        setCurrentPage(arrPages[index])
        console.log(arrPages[index])
        handleScroll()
    }

    const handleScroll = () => {
        const element = document.getElementsByClassName("containerActorsList")[0]
        element.scrollIntoView({
            behavior: 'smooth'
        })
        
    }
    


    return ( 
        <div className='containerPagination d-flex justify-content-center text-light mt-4 '>
            <span className={`mx-2 d-flex align-items-center btn ${currentPage > 1 ? "bg-danger" : "bg-secondary text-dark" } `} onClick={handlePrev}>Prev</span>
            {arrPages.map((item, index) => {
                return <span className={`d-flex align-items-center mx-2 px-3 btn 
                btn-dark rounded-1 text-light ${arrPages[index] === currentPage ? "currentPage" : ""}`} onClick={()=>handleSelectPage(index)}>{item}</span>
            })}
            <span className={`mx-2 d-flex align-items-center btn ${currentPage < totalPages ? "bg-danger" : "bg-secondary text-dark" } `} onClick={handleNext}>Next</span>
        
        </div>
     );
}

export default Pagination;