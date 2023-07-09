import React, { createContext, useContext, useState } from 'react';
import './Reviews.scss'
import SingleReview from './SingleReview';
import WriteReview from './WriteReview';

export const ViewReviewsContext = createContext()
function ViewReviews( {title }) {

    const [listReview, setListReview] = useState([])
    return ( 
        <ViewReviewsContext.Provider value={{listReview,setListReview}}>
            <div className='wrapperField'>
                <div className='contentReviews fw-bold'>
                    <div className='titleName'>
                        {title} (3)
                    </div>

                    <div className='ms-5'>
                        {listReview.map((item, index)=>{
                            return <SingleReview review={item} key={index}/>
                        } )}
                    </div>
                    <div className='ms-2'>
                        <WriteReview/>
                    </div>
                    
                </div>
            </div>
        </ViewReviewsContext.Provider>
     );
}

export default ViewReviews;