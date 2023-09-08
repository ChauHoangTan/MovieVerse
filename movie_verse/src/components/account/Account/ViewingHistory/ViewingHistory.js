import React, { useEffect, useState } from 'react';
import './ViewingHistory.scss'
import axios from 'axios';
import LoadingEffect from '../../../LoadingEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faEdit, faPlay } from '@fortawesome/free-solid-svg-icons';
import Rating from '../../../Rating';
function ViewingHistory({title}) {
    const [dataHistory, setDataHistory] = useState([]);
    const [dataShow, setDataShow] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let objData = await handleGetHistoryFormAPI()
            setDataHistory(objData.data)
            setDataShow(objData.dataShow)
            setIsLoaded(true)        
        }
        fetchData()
        handleDataShow()
    } ,[title])


    const handleGetHistoryFormAPI = async() => {
        try{
            let request = ''
            if(title === 'Ratings'){
                request = 'rating'
            }else if(title === 'Liked Movies'){
                request = 'favorite'
            }else if(title === 'Bookmarks'){
                request = 'bookmark'
            }else if(title === 'Comments'){
                request = 'comment'
            }else if(title === 'Playlist'){
                request = 'play_list'
            }else if(title === 'Viewing History'){
                request = 'history'
            }
            const reponse = await axios.post(`http://localhost:4000/account`,
            {
                token: sessionStorage.getItem('token'),
                field: request
            })
            const result = reponse.data

            let dataShow = []
            if(result.length <= 10 ){
                dataShow = result
            }else{
                for(let i = 0; i < 10; i++){
                    dataShow.push(result[i])
                }
            }
            console.log(reponse)
            return {
                data: result,
                dataShow: dataShow
            }
        }catch(error){
            console.log(error)
        }
    }

    // useEffect(() => {
    //     handleDataShow()
        
    // }, [isLoaded, title])
    const handleDataShow = () => {
        console.log(dataShow)
        if(isLoaded){
            let length = dataShow.length + 10
            if(length > dataHistory.length){
                length = dataHistory.length
            }
            let newData = []
            for(let i = dataShow.length; i < length; i++){
                newData.push(dataHistory[i])
            }
    
            setDataShow([...dataShow, ...newData])
        } 
        
    } 
    return ( 
        <>
            
            {isLoaded ? 
                (<div className='viewingHistory'>
                    <div className='mx-3 my-3 fw-bold fs-5'>{title} <FontAwesomeIcon className='float-end text-light' icon={faEdit} /></div>
                    <div className='content'>
                        {dataShow.map((film,index) => {
                            return(
                                <div>
                                    {film.type === 'movie' ? (
                                        <div>
                                            <span className='rating'>
                                                    <Rating percent={film.vote_average} width={45}/>
                                                </span>
                                            <img src={`https://image.tmdb.org/t/p/original${film.poster_path}`}/>
                                            <span className='text-light titleFilm'>{film.title}</span>
                                            <span className='hoverFilm'>
                                                <FontAwesomeIcon icon={faPlay} className='btnPlay'/>
                                            </span>

                                        </div>
                                        ) : (
                                        <div>
                                            <span className='rating'>
                                                    <Rating percent={film.vote_average} width={45}/>
                                                </span>
                                            <img src={`https://image.tmdb.org/t/p/original${film.poster_path}`}/>
                                            <span className='text-light titleFilm'>{film.name}</span>
                                            <span className='hoverFilm'>
                                                <FontAwesomeIcon icon={faPlay} className='btnPlay'/>
                                            </span>

                                        </div>
                                        )
                                    }
                                    
                                    
                                </div>    
                 
                            )
                        })}

                        
                    </div>
                    <div className='text-center my-3 viewMore' onClick={handleDataShow}>View more <FontAwesomeIcon icon={faAnglesDown}/></div>
                </div>) 
                
            : <LoadingEffect />}
        </>
        
        
     );
}

export default ViewingHistory;