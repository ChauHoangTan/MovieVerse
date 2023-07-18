import React from 'react';
import TopNewestFilm from './TopNewestFilm/TopNewestFilm'
import RandomFilm from './RandomFilm/RandomFilm'
import CornerLove from './CornerLove/CornerLove'

function Home() {
    return (
        <div style={{ backgroundColor: "black" }}>
            <TopNewestFilm />
            <div className='d-flex py-3 px-3'>
                <div style={{ width: '70%' }}>
                    <CornerLove />
                </div>
                <div style={{ width: '30%' }}>
                    <RandomFilm />
                </div>
            </div>
        </div>
    );
}

export default Home;