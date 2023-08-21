import React, { useEffect, useState } from 'react';
import TopNewestFilm from './TopNewestFilm/TopNewestFilm'
import RandomFilm from './RandomFilm/RandomFilm'
import CornerLove from './CornerLove/CornerLove'
import Popular from './Popular/Popular'
import News from './News/News'
import axios from 'axios';
import LoadingEffect from '../LoadingEffect';
import ShowListFilm from './ShowListFilm/ShowListFilm';
import { useSelector } from 'react-redux';
import './Home.scss'

const getListFromAPI = async (url) => {
    try{
        const response = await axios.get(url);
        const results = response.data.results
        return results
    }catch(err){
        console.log(err)
    }
}

const getGenresFromAPI = async (url) => {
    try{
        const response = await axios.get(url);
        const results = response.data.genres
        return results
    }catch(err){
        console.log(err)
    }
}


const APIkey = 'a50a061b1989216e2c7931d35fc20896';
const urlMovieTrending = `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIkey}&language=en-US&page=1`
const urlMovieTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}&language=en-US&page=1`
const urlMoviePopular = `https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`
const urlMovieNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIkey}&language=en-US&page=1`

const urlTVTrending = `https://api.themoviedb.org/3/trending/tv/day?api_key=${APIkey}&language=en-US&page=1`
const urlTVTopRated = `https://api.themoviedb.org/3/tv/top_rated?api_key=${APIkey}&language=en-US&page=1`
const urlTVPopular = `https://api.themoviedb.org/3/tv/popular?api_key=${APIkey}&language=en-US&page=1`
const urlTVAiringToday = `https://api.themoviedb.org/3/tv/airing_today?api_key=${APIkey}&language=en-US&page=1`

const urlGenresMovie =  `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIkey}&language=en`
const urlGenresTV =  `https://api.themoviedb.org/3/genre/tv/list?api_key=${APIkey}&language=en`

function Home() {
    const [movieTrending, setMovieTrending] = useState([])
    const [movieTopRated, setMovieTopRated] = useState([])
    const [moviePopular, setMoviePopular] = useState([])
    const [movieNowPlaying, setMovieNowPlaying] = useState([])

    const [tvTrending, setTVTrending] = useState([])
    const [tvTopRated, setTVTopRated] = useState([])
    const [tvPopular, setTVPopular] = useState([])
    const [tvAiringToday, setTVAiringToday] = useState([])

    const [genresMovie, setGenresMovie] = useState([])
    const [genresTV, setGenresTV] = useState([])

    const [isLoaded, setIsLoaded] = useState(false)

    const theme = useSelector(state => state.theme.theme)
    useEffect(() => {
        const fetchConnect = async () =>{
            const movieListTrending = await getListFromAPI(urlMovieTrending)
            setMovieTrending(movieListTrending)
            const movieListTopRated = await getListFromAPI(urlMovieTopRated)
            setMovieTopRated(movieListTopRated)
            const movieListPopular = await getListFromAPI(urlMoviePopular)
            setMoviePopular(movieListPopular)
            const movieListNowPlaying = await getListFromAPI(urlMovieNowPlaying)
            setMovieNowPlaying(movieListNowPlaying)

            const tvListTrending = await getListFromAPI(urlTVTrending)
            setTVTrending(tvListTrending)
            const tvListTopRated = await getListFromAPI(urlTVTopRated)
            setTVTopRated(tvListTopRated)
            const tvListPopular = await getListFromAPI(urlTVPopular)
            setTVPopular(tvListPopular)
            const tvListAiringToday = await getListFromAPI(urlTVAiringToday)
            setTVAiringToday(tvListAiringToday)

            const genresMovie = await getGenresFromAPI(urlGenresMovie)
            setGenresMovie(genresMovie)
            const genresTV = await getGenresFromAPI(urlGenresTV)
            setGenresTV(genresTV)

            setIsLoaded(true)

        }

        fetchConnect()
        
    }, [])

    return (
        <>
            {isLoaded === false ? (<LoadingEffect/>) : 
            (<div className={`wrapperHome ${theme}`}>
                <TopNewestFilm list={movieTrending} genres={genresMovie} />
                <div className='listFilm'>

                    
                    <div className='mt-4'>
                        <span className='fs-3 fw-bold banner'>Movie</span>
                        <ShowListFilm title='Trending' list={movieTrending} name='movieTrending' type='movie'/>
                        <ShowListFilm title='Popular' list={moviePopular} name='moviePopular' type='movie'/>
                        <ShowListFilm title='Top Rated' list={movieTopRated} name='movieTopRated' type='movie'/>
                        {/* <ShowListFilm title='Now Playing' list={movieNowPlaying} name='movieNowPlaying'/> */}
                    </div>
                    
                    <div className='mt-4'>
                        <span className='fs-3 fw-bold banner'>TV Show</span>
                        <ShowListFilm title='Trending' list={tvTrending} name='tvTrending' type='tv'/>
                        <ShowListFilm title='Popular' list={tvPopular} name='tvPopular' type='tv'/>
                        <ShowListFilm title='Top Rated' list={tvTopRated} name='tvTopRated' type='tv'/>
                        {/* <ShowListFilm title='Airing Today' list={tvAiringToday} name='tvAiringToday'/> */}
                    </div>
                </div>
                
                
            </div>)}
        </>

    );

}

export default Home;