import React, { useEffect, useState } from 'react';
import './FilmCredits.scss'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FilmCredits({Title,ListCredit}) {
    const [arrMedia, setArrMedia] = useState([])
    let totalLength = ListCredit.length;

    useEffect( () => {
        let length = totalLength;
        let newArrMedia = [...arrMedia];
        if(length > 8){
            length = 8
        }
        if(arrMedia.length === 0) {
            for(let i = 0; i < length; i++){
                newArrMedia.push(ListCredit[i]) 
            }
        }
        
        setArrMedia(newArrMedia)
    },[])

    const handleViewMore = () => {
        let length = arrMedia.length + 8
        let newArrMedia = [...arrMedia]
        if(length > totalLength){
            length = totalLength
        }

        for(let i = arrMedia.length; i < length; i++){
            newArrMedia.push(ListCredit[i])
        }
        setArrMedia(newArrMedia)
        console.log(arrMedia)
    }

    return ( 
        <div className='containerFilmCredits'>
            <div className='wrapFilmCredits'>
                <div className='typeMedia'>{Title}</div>
                <div className='showMedia'>
                    {arrMedia.map((item, index) =>{
                        if(item.poster_path !== null){
                            return <div><img src={`https://image.tmdb.org/t/p/original${item.poster_path}`}/></div>
                        }else{
                            return null
                        }
                    })}

                    
                </div>
                <div className='d-flex justify-content-center mt-4 viewMore'>
                    <span className='btn' onClick={()=>handleViewMore()}>View more <FontAwesomeIcon icon={faAnglesDown}/></span>
                </div>
            </div>
        </div>
     );
}

export default FilmCredits;