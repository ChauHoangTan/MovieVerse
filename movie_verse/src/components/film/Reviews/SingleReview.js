import React, { useState } from 'react';
import { faUser, faThumbsUp, faThumbsDown, faReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Reviews.scss'

function SingleReview({review}) {

    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);

    const handleLike = () => {
        if(like){
            setLike(false)
        }else{
            setLike(true)
            if(dislike){
                setDislike(false)
            }
        }

    }

    const handleDislike = () => {
        if(dislike){
            setDislike(false)
        }else{
            setDislike(true)
            if(like){
                setLike(false)
            }
        }
    }

    return ( 
        <div className='pt-1 pb-3'>
            <div className='singleReview pt-2 rounded-2 w-75'>
                <div className='px-2 py-1 d-flex align-items-center fw-normal fs-6'>
                    <FontAwesomeIcon icon={faUser} className='border border-1 rounded-5 p-2 text-danger'/>  
                    <span className='mx-2 '>{review.name}</span>
                    <div className='date ms-auto text-light-emphasis'>{review.date}</div>
                </div>

                <div className='px-3 py-1 d-flex align-items-center fw-normal fs-6 fst-italic overview'>
                {review.overview}
                </div>

                <div className='d-flex justify-content-end my-2'>
                    <FontAwesomeIcon icon={faThumbsUp} 
                        className={`me-3 ${like ? "text-danger" : ""}`} 
                        onClick={handleLike}/>
                    <FontAwesomeIcon icon={faThumbsDown} 
                        className={`me-3 ${dislike ? "text-danger" : ""}`} 
                        onClick={handleDislike}/>
                    <FontAwesomeIcon icon={faReply} className=' me-3'/>            
                </div>
                
            </div>

        </div>
     );
}

export default SingleReview;