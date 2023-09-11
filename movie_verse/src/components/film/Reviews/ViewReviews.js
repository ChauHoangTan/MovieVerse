import React, { createContext, useContext, useEffect, useState } from 'react';
import './Reviews.scss'
import SingleReview from './SingleReview';
import WriteReview from './WriteReview';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const ViewReviewsContext = createContext()
function ViewReviews( {title, theme }) {

    const [listReview, setListReview] = useState([])
    // id phim
    const {type,id} = useParams();

    // format = {
    //     name: "Châu Hoàng Tấn",
    //     date: getCurrentDate(),
    //     overview: input
    // }

    // lấy danh sách review của phim
    useEffect(()=>{
        const fetchConnect = async () => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL_PREF}/${type}/${id}/reviews`)
                setListReview(response.data)
                console.log(response)
            }catch(err){
                console.log(err)
            }
        }
        fetchConnect()
    },[])
    return ( 
        <ViewReviewsContext.Provider value={{listReview,setListReview}}>
            <div className={`wrapperField ${theme}`}>
                <div className='contentReviews fw-bold'>
                    <div className='titleName'>
                        {title} ({listReview.length})
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