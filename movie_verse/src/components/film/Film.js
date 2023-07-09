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

function Film() {

    const listVideo = ["https://www.youtube.com/embed/MsXdUtlDVhk",
    "https://www.youtube.com/embed/MsXdUtlDVhk","https://www.youtube.com/embed/MsXdUtlDVhk"]

    const listTrailer = ["https://www.youtube.com/embed/Di310WS8zLk","https://www.youtube.com/embed/Di310WS8zLk",
    "https://www.youtube.com/embed/Di310WS8zLk","https://www.youtube.com/embed/Di310WS8zLk"]

    const listBackdrop = ["https://www.themoviedb.org/t/p/w533_and_h300_bestv2/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/8FsfKHre4dN6dDVZjd64nQnThGH.jpg",
    "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/xnCDJZR2j4PSfscuwDfCkiCZ4h4.jpg",
    "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/l56gka4kw2R4K7M4hSJRt12M6R6.jpg"]

    const listPoster = ["https://www.themoviedb.org/t/p/w220_and_h330_face/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    "https://www.themoviedb.org/t/p/w220_and_h330_face/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    "https://www.themoviedb.org/t/p/w220_and_h330_face/gq5xcbK2IDM6DeYLdpHqLpoxU0f.jpg",
    "https://www.themoviedb.org/t/p/w220_and_h330_face/uLDkryO7vFQBEcR7DeToToWezDM.jpg",
    "https://www.themoviedb.org/t/p/w220_and_h330_face/uLDkryO7vFQBEcR7DeToToWezDM.jpg",
    "https://www.themoviedb.org/t/p/w220_and_h330_face/uLDkryO7vFQBEcR7DeToToWezDM.jpg"]

    const listRelative = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LXiYtEnDQEUx45iIut1F09t0TKFU5ZXusZsWORJ45ji0zDbq",
    "https://upload.wikimedia.org/wikipedia/vi/b/b0/Avatar-Teaser-Poster.jpg",
    "https://www.nautiljon.com/images/anime/00/75/summer_time_rendering_10057.webp",
    "https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"]
    return ( 
        <>
            <Details/>
            <Videos title="Videos" videos={listVideo}/>
            <Videos title="Trailers" videos={listTrailer}/>
            <Backdrops title="Backdrops" list={listBackdrop} cols={2}/>
            <Backdrops title="Posters" list={listPoster} cols={6}/>
            <ViewReviews title="Reviews" />
            <RelativeMovie title="You may also like" list={listRelative}/>
        </>
        
     );
}

export default Film;