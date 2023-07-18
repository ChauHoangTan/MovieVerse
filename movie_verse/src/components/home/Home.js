import React from 'react';
import TopNewestFilm from './TopNewestFilm/TopNewestFilm'
import RandomFilm from './RandomFilm/RandomFilm'


function Home() {
    return (
        <div style={{ backgroundColor: "black" }}>
            <TopNewestFilm />
            <RandomFilm />
        </div>
    );
}

export default Home;