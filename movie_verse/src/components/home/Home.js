import React from 'react';
import TopNewestFilm from './TopNewestFilm/TopNewestFilm'
import RandomFilm from './RandomFilm/RandomFilm'
import CornerLove from './CornerLove/CornerLove'
import Popular from './Popular/Popular'
import News from './News/News'

function Home() {
    return (
        <div style={{ backgroundColor: "black" }}>
            <TopNewestFilm />
            <div className='d-flex py-4' style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                <div style={{ width: '70%' }}>
                    <CornerLove />
                </div>
                <div style={{ width: '30%' }}>
                    <RandomFilm />
                </div>
            </div>
            <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                <div className='mt-2' style={{ color: 'white', fontSize: '22px', fontWeight: '500' }}>
                    <div className='mb-2'>
                        Popular
                    </div>
                    <Popular />
                </div>
                <div className='mt-4' style={{ color: 'white', fontSize: '22px', fontWeight: '500' }}>
                    <div className='mb-2'>
                        Popular
                    </div>
                    <Popular />
                </div>
                <div className='mt-4' style={{ color: 'white', fontSize: '22px', fontWeight: '500' }}>
                    <div className='mb-2'>
                        Popular
                    </div>
                    <Popular />
                </div>
                <div className='mt-4' style={{ color: 'white', fontSize: '22px', fontWeight: '500' }}>
                    <div className='mb-2'>
                        Popular
                    </div>
                    <Popular />
                </div>
            </div>
            <div className='mt-4 pb-5' style={{ paddingLeft: '5%', paddingRight: '5%', color: 'white', fontSize: '22px', fontWeight: '500' }}>
                <div className='d-flex'>
                    <div style={{ width: '4px', height: '4vh', backgroundColor: '#FFCA2B', marginRight: '0.5%' }} />
                    <div>
                        News
                    </div>
                </div>
                <News />
            </div>
        </div>
    );
}

export default Home;