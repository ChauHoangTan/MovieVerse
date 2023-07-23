import Button from 'react-bootstrap/Button';
import Carousel from 'react-grid-carousel';

import './Popular.scss'
function Popular() {
    const listFilmPopular = ['https://www.themoviedb.org/t/p/original/iCi5SjCCM8euTwNI2J0nY9EdRgo.jpg', 'https://m.media-amazon.com/images/I/81Bivc7COzL.jpg', 'https://cdn.europosters.eu/image/1300/posters/harry-potter-philosopher-s-stone-20th-anniversary-i124048.jpg', 'https://cdn1.naekranie.pl/wp-content/uploads/2021%2F04%2Fdemonslayer_60893b2229018.jpeg', 'https://i.ebayimg.com/images/g/3WMAAOSwAfpaq~u7/s-l1600.jpg', 'https://cdn.europosters.eu/image/750/posters/the-last-of-us-key-art-i127761.jpg', 'https://ecdn.game4v.com/g4v-content/uploads/2021/07/Kimetsu-ss2-1-game4v.jpg', 'https://ecdn.game4v.com/g4v-content/uploads/2021/07/Kimetsu-ss2-1-game4v.jpg', 'https://ecdn.game4v.com/g4v-content/uploads/2021/07/Kimetsu-ss2-1-game4v.jpg', 'https://ecdn.game4v.com/g4v-content/uploads/2021/07/Kimetsu-ss2-1-game4v.jpg', 'https://ecdn.game4v.com/g4v-content/uploads/2021/07/Kimetsu-ss2-1-game4v.jpg', 'https://ecdn.game4v.com/g4v-content/uploads/2021/07/Kimetsu-ss2-1-game4v.jpg', 'https://ecdn.game4v.com/g4v-content/uploads/2021/07/Kimetsu-ss2-1-game4v.jpg']
    const listFilmPopularShow = listFilmPopular.map((film, index) =>
        <Carousel.Item key={index}>
            <Button style={{
                backgroundImage: 'url(' + film + ')', width: '27vh', height: '40vh', backgroundSize: '100%', marginRight: '30px',
                border: '0'
            }}>

            </Button>
            {/* <img className='carousel-image rounded-1' src={film} /> */}

        </Carousel.Item>
    );
    return (
        <Carousel cols={6} rows={1} gap={(6)} loop>
            {listFilmPopularShow}
        </Carousel>
    );
}

export default Popular