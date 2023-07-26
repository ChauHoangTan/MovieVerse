import React, { useEffect, useState } from 'react';
import './ViewingHistory.scss'
import axios from 'axios';
import LoadingEffect from '../../../LoadingEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faEdit } from '@fortawesome/free-solid-svg-icons';
function ViewingHistory() {

    const APIkey = 'a50a061b1989216e2c7931d35fc20896';
    const [dataHistory, setDataHistory] = useState([]);
    const [dataShow, setDataShow] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await handleGetHistoryFormAPI()
            setDataHistory(data)
            setIsLoaded(true)            
        }

        fetchData()
        
    } ,[])

    const handleGetHistoryFormAPI = async() => {
        try{
            const reponse = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APIkey}&language=en-US&page=${1}`)
            const result = reponse.data.results
            console.log(result)
            return result
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        handleDataShow()
    }, [isLoaded])
    const handleDataShow = () => {
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
                    <div className='mx-3 my-3 fw-bold fs-5'>Viewing History <FontAwesomeIcon className='float-end text-light' icon={faEdit} /></div>
                    <div className='content'>
                        {dataShow.map((movie,index) => {
                            return(
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
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