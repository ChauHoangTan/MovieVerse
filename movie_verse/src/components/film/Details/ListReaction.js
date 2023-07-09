import React from 'react';
import { useState } from 'react';
import RoundIcon from '../../RoundIcon';
import { faList, faHeart, faBookmark, faStar, faCircleMinus, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListReaction() {

    const [addPlaylist, setAddPlaylist] = useState(false)
    const [addFavorite, setAddFavorite] = useState(false)
    const [addBookmark, setAddBookmark] = useState(false)
    const [addRating, setAddRating] = useState(false)
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    const handlePlaylist = () => {
        if(addPlaylist){
            setAddPlaylist(false)
        }else{
            setAddPlaylist(true)
        }
    }

    const handleFavorite = () => {
        if(addFavorite){
            setAddFavorite(false)
        }else{
            setAddFavorite(true)
        }
    }

    const handleBookmark = () => {
        if(addBookmark){
            setAddBookmark(false)
        }else{
            setAddBookmark(true)
        }
    }

    const handleRating = (index) => {
        if(index === 0){
            setAddRating(false)
            setRating(false)
        }else{
            setAddRating(true)
            setRating(index)
        }
        
    }

    return ( 
        <>
            <div className='list field'>
                <div className={`d-inline-block me-2 ${addPlaylist ? " isPlaylistClick" : ""} `} onClick={handlePlaylist} ><RoundIcon width={40} icon={faList}/></div>
                <div className={`d-inline-block me-2 ${addFavorite ? " isFavoriteClick" : ""} `} onClick={handleFavorite}><RoundIcon width={40} icon={faHeart}/></div>     
                <div className={`d-inline-block me-2 ${addBookmark ? " isBookmarkClick" : ""} `} onClick={handleBookmark}><RoundIcon width={40} icon={faBookmark}/></div>
                <div className={`d-inline-block me-2 ${addRating ? " isRatingClick" : ""} dropdown-center`}  >
      
                    <span className="" data-bs-toggle="dropdown" aria-expanded="true">
                        <RoundIcon width={40} icon={faStar}/>
                    </span>
                    <ul className="dropdown-menu" >
                        <li>
                            <div className='d-flex align-items-center justify-content-around'>
                                <FontAwesomeIcon icon={faCircleMinus} className='iconMinus' onClick={()=>handleRating(0)}/>
                                {[...Array(5)].map((star,index) => {
                                    
                                    let val = rating
                                    if(hover !== null){
                                        val = hover
                                    }
                                    return <FontAwesomeIcon icon={faStar} 
                                    className={`iconStar ${(index+1 <= val) ? "isTarget" : ""}`} 
                                    key={index} 
                                    onClick={()=>handleRating(index+1)} 
                                    onMouseEnter={()=>setHover(index+1)} 
                                    onMouseLeave={()=>setHover(null)}/>
                                })}

                            </div>
                        </li>
                    </ul>

                    {/* <div class="">
                    <button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Centered dropdown
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Action two</a></li>
                        <li><a class="dropdown-item" href="#">Action three</a></li>
                    </ul>
                    </div> */}
                   
                </div>
            </div>
        </>
     );
}

export default ListReaction;