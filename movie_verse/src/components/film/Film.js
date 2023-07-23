import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Rating from '../Rating';
import RoundIcon from '../RoundIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faList, faHeart, faBookmark, faStar } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-grid-carousel';
import Details from './Details/Details';
import Videos from './Videos/Videos';
import Backdrops from './Backdrops/Backdrops';
import ViewReviews from './Reviews/ViewReviews';
import RelativeMovie from './RelativeMovie/RelativeMovie';
import axios from 'axios'
import { useEffect, useState } from 'react';
import LoadingEffect from '../LoadingEffect';
import { useLocation } from "react-router-dom";

function Film() {
    const APIkey = 'a50a061b1989216e2c7931d35fc20896';
    let details;
    let videos;
    let backdrops;
    let posters;
    let similars;

    const [dataDetails, setDataDetails] = useState(null)
    const [dataVideos, setDataVideos] = useState(null)
    const [dataImages, setDataImages] = useState(null)
    const [dataSimilars, setDataSimilars] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Bật tính năng scroll restoration
        window.history.scrollRestoration = 'auto';
      }, []);

    // thực hiện lấy data khi truy cập
    useEffect(() => {
        const fetchData = async () =>{
            const {resultDetails,resultVideos, resultImages, resultSimilar} = await findDataMovie(19995)
            setDataDetails(resultDetails)
            setDataVideos(resultVideos)
            setDataImages(resultImages)
            setDataSimilars(resultSimilar)
            setIsLoaded(true)
        }
        fetchData();

        window.scrollTo(0,0)
        
    }, [])

    const {pathname} = useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[pathname])

    // kiểm tra xem dữ liệu đã load xong chưa, nếu rồi thì render dữ liệu
    if(isLoaded) {
        details = {
            name: dataDetails.title,
            tagline: dataDetails.tagline,
            category: dataDetails.genres,
            voteAverage: dataDetails.vote_average,
            overview: dataDetails.overview,
            author: dataDetails.credits.crew.filter(person => person.job==="Director"),
            cast: dataDetails.credits.cast,
            backdropPath: dataDetails.backdrop_path,
            posterPath: dataDetails.poster_path,
            year: dataDetails.release_date.slice(0,4)
        }

        videos = dataVideos       

        backdrops = dataImages.backdrops
        posters = dataImages.posters

        similars = dataSimilars
    }

    // const searchMovieWithKeyword = async (query) =>{
    //     try{
    //         const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${query}&include_adult=false&language=en-US&page=1`)
    //         const sortedResults = response.data.results.sort((a, b) => b.popularity - a.popularity);
    //         console.log(sortedResults.credits.crew.filter(person => person.job ==='Director'))
    //     }catch(error){
    //         console.log(error)
    //     }   
        
    // }

    const findDataMovie = async (movieId) => {
        try{
            const responseDetails = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIkey}&append_to_response=credits&language=en-US`)
            const responseVideos = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${APIkey}&language=en-US`)
            const responseImages = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${APIkey}`)
            const responseSimilar = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${APIkey}&language=en-US&page=1`)
            const resultDetails = responseDetails.data
            const resultVideos = responseVideos.data.results
            const resultImages = responseImages.data
            const resultSimilar = responseSimilar.data.results
            
            return {resultDetails, resultVideos, resultImages, resultSimilar}
        }catch(error){
            console.log(error)
        }
    }
    //searchMovieWithKeyword("Wednesday")
    //findMovieDetails(19995)

    

    return ( 
        <>
            {isLoaded ? (
                <>
                    <Details details={details}/>
                    <Videos title="Videos" videos={videos}/>
                    <Backdrops title="Backdrops" images={backdrops} cols={2}/>
                    <Backdrops title="Posters" images={posters} cols={6}/>
                    <ViewReviews title="Reviews" />
                    <RelativeMovie title="You may also like" similars={similars}/>
                </>
            ) : <LoadingEffect />}
            
        </>
        
     );
}

export default Film;