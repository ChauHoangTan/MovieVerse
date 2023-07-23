import React, { useEffect, useRef, useState } from 'react';
import './RankedCredits.scss'

function RankedCredit({Title,ListCredit}) {

    const [arrRanked, setArrRanked] = useState([])
    const [isRenderd, setIsRendered] = useState(false)
    let count = useRef(0);

    // Trọng số cho mỗi tiêu chí
    const weights = {
        popularity: 0.3,
        vote_average: 0.4,
        vote_count: 0.3,
    };

    // Tính điểm tổng hợp dựa trên trọng số
    const calculateRankingScore = (movie) => {
        const score =
            movie.popularity * weights.popularity +
            movie.vote_average * weights.vote_average +
            movie.vote_count * weights.vote_count;
        return score;
    };

    // kiểm tra xem các phần tử đã được render xong chưa, nếu xong rồi thì
    // thực hiện cho carousel
    useEffect(() =>{
        console.log(count.current)
        if(isRenderd){
            let items = document.querySelectorAll('.carousel .carousel-item')
    
            items.forEach((el) => {
                const minPerSlide = 4
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
            })
        }
            
    },[isRenderd])
    

    // dùng để sort thứ hạng cái media từ 1 - 10
    useEffect(() => {
        let newListCredit = ListCredit.filter(
            function(movie){
                return movie.poster_path !== null
                
            }
        )
        let length = 10;
        if(length > newListCredit.length){
            length = newListCredit.length
        }

        let newArrRanked = []
        for(let i = 0; i < length; i++){
            newArrRanked.push(newListCredit[i])
        }

        newArrRanked.sort(function(a,b){return calculateRankingScore(b) - calculateRankingScore(a)})
        setArrRanked(newArrRanked)
        console.log(newArrRanked)
    },[])

    // dùng để kiểm tra xong component render xong chưa
    useEffect(()=>{

        setIsRendered(true)
        count.current++;
    },[])
    
    return ( 
        <>

            <div className='wrapRankedCredits'>
                <div className='typeMedia'>
                    {Title}
                </div>

                <div className="container w-100 text-center my-3">
                    <div className="row mx-auto my-auto justify-content-center">
                        <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className='showMedia'>
                                    {arrRanked.map((item,index) => {
                                        // if(index === 9){
                                        //     if(count.current === 0){
                                        //         count.current++
                                        //         setIsRendered(true)
                                        //         console.log("hello")
                                        //     }
                                        // }
                                        return (
                                        // <div className='containerMedia'>
                                        //     <span className={`numberOfRank d-flex align-items-start rank-${index+1}`}>{index + 1}</span>
                                        //     <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`}/>
                                        // </div>
                                        <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                            <div className="col-md-3">
                                                <div className='containerMedia'>
                                                    <span className={`numberOfRank d-flex align-items-start rank-${index+1}`}>{index + 1}</span>
                                                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`}/>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <a className="carousel-control-prev w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            </a>
                            <a className="carousel-control-next w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </a>
                        
                    </div>		
	            </div>
                
            </div>
            </div>
            
        </>
        
     );
}

export default RankedCredit;