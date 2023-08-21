import React, { useEffect } from 'react';
import { useState } from 'react';
import RoundIcon from '../../RoundIcon';
import { faList, faHeart, faBookmark, faStar, faCircleMinus, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import { useParams } from 'react-router-dom';

function ListReaction() {

    const [addPlaylist, setAddPlaylist] = useState(false)
    const [addFavorite, setAddFavorite] = useState(false)
    const [addBookmark, setAddBookmark] = useState(false)
    const [addRating, setAddRating] = useState(false)
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const {type, id} = useParams()
    console.log(type,id)
    useEffect(() => {
        const fetchConnect = async () => {
            try{
                const response = await axios.post(`http://localhost:4000/${type}/${id}`,{
                    token: sessionStorage.getItem('token'),
                    first_request: true,

                }) 
                setAddPlaylist(response.data.playList);
                setAddFavorite(response.data.favorite);
                setAddBookmark(response.data.bookmark);
                if(response.data.rating > 0){
                    setAddRating(true)
                }
                
                setRating(response.data.rating);
                console.log(response)

            }catch(err){
                console.log(err)
            }  
        }
        fetchConnect()
    },[])

    const sendUpdateData = async (field, check) => {
        // thực hiện cập nhật dữ liệu
        try{
            await axios.post(`http://localhost:4000/${type}/${id}`,{
                token: sessionStorage.getItem('token'),
                [field]: check,

            })
        }catch(err){
            console.log(err)
        }
    }

    const handlePlaylist = () => {
        if(addPlaylist){
            setAddPlaylist(false)
            sendUpdateData('play_list', false)
        }else{
            setAddPlaylist(true)
            sendUpdateData('play_list', true)
        }
    }

    const handleFavorite = () => {
        if(addFavorite){
            setAddFavorite(false)
            sendUpdateData('favorite', false)
        }else{
            setAddFavorite(true)
            sendUpdateData('favorite', true)
        }
    }

    const handleBookmark = () => {
        if(addBookmark){
            setAddBookmark(false)
            sendUpdateData('bookmark', false)
        }else{
            setAddBookmark(true)
            sendUpdateData('bookmark', true)
        }
    }

    const sendUpdateDataRating = async (field, check, rate) => {
        // thực hiện cập nhật dữ liệu
        try{
            await axios.post(`http://localhost:4000/${type}/${id}`,{
                token: sessionStorage.getItem('token'),
                [field]: check,
                rate: rate,

            })
        }catch(err){
            console.log(err)
        }
    }
    const handleRating = (index) => {
        if(index === 0){
            setAddRating(false)
            setRating(false)
            sendUpdateDataRating('rating', false, index)
        }else{
            setAddRating(true)
            setRating(index)
            sendUpdateDataRating('rating', true, index)
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