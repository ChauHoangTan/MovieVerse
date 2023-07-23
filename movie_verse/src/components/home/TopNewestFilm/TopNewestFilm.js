import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import './TopNewestFilm.scss';
import Category from './Category';
import Rating from '../../Rating';

import "@fontsource/inter"; // Defaults to weight 400

class Film {
    constructor(image, name, subName, description, rate, categories) {
        this.image = image;
        this.name = name;
        this.subName = subName;
        this.description = description;
        this.rate = rate;
        this.categories = categories;
    }
}

var cate1 = ["Action", "Mystery", "Fiction", "Drama"]
var cate2 = ["Action", "Cartoons", "Fiction", "Fantasy", "Comedy"]
var cate3 = ["Action", "Adventure", "Fiction"]

var Film1 = new Film('https://toigingiuvedep.vn/wp-content/uploads/2022/12/hinh-anh-wednesday-lam-hinh-nen-may-tinh.jpg', 'WEDNESDAY', 'Wednesday Addams (2022)', 'Clever, stingy, and a little slow at heart, Wednesday Addams investigates a serial murder case as it gains new friends and foes alike at Nevermore Academy', 7.5, cate1);
var Film2 = new Film('https://ecdn.game4v.com/g4v-content/uploads/2021/09/26155431/game4v-kimetsu-no-yaiba-ss2-3-1632646470-68.jpeg', "KIMETSU NO YAIBA", 'The Movie: Mugen Train', 'After finishing the study at the Butterfly Estate, Tanjiro reached the next place “Mugen Train” for task with friends. In a short time, over 40 people disappeared there and the Demon Slayers sent there all lost contact. Tanjiro, Zenitsu, Inosuke and Nezuko joined Rengoku Kyojuro, who is one of the “Pillars” of the Demon Slayers. They’re going to face the Demons hiding in the Mugen Train to the darkness.', 8.5, cate2);
var Film3 = new Film('https://img5.thuthuatphanmem.vn/uploads/2021/12/06/anh-nen-nguoi-nhen-4k-dep_090219416.jpg', "SPIDERMAN", 'The Movie: No Way Home', 'With Spider-Mans identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.', 8.5, cate3);

const ListFilmNewest = [Film1, Film2, Film3]

const show = ListFilmNewest.map((film) =>
    <Carousel.Item>
        <div className="backgroundContainer" style={{ backgroundImage: 'url(' + film.image + ')' }}>
            <div className="content">
                <div style={{ height: '70%' }}>
                    <div style={{ fontWeight: '900', fontSize: '50px' }}>
                        {film.name}
                    </div>
                    <div style={{ fontWeight: '500', fontSize: '30px', marginTop: '-2%' }}>
                        {film.subName}
                    </div>
                    <div style={{ fontWeight: '300', fontSize: '17px', marginTop: '5%', marginRight: '10%', opacity: '0.75', marginBottom: "4%" }}>
                        {film.description}
                    </div>
                    <div className='d-flex' style={{ paddingRight: '10%' }}>
                        <div className='rating'>
                            <Rating percent={film.rate} width={50} />
                        </div>
                        <div className='rating'>
                            <Category listCate={film.categories} />
                        </div>
                    </div>
                </div>
                <div>
                    <span>
                        <Button variant="warning" className='py-1 px-3' style={{ fontWeight: '600', fontSize: '18px', marginRight: '3%' }}>
                            <FontAwesomeIcon icon={faPlay} className='fs-5' style={{ marginRight: '5px' }} />
                            <span>
                                PLAY
                            </span>
                        </Button>
                    </span>
                    <span>
                        <Button variant="secondary" className='py-1 px-3' style={{ fontWeight: '600', fontSize: '18px' }}>
                            <FontAwesomeIcon icon={faCircleInfo} className='fs-5' style={{ marginRight: '5px' }} />
                            <span>
                                MORE INFO
                            </span>
                        </Button>
                    </span>
                </div>
            </div>
        </div>
    </Carousel.Item >
);

function TopNewestFilm() {
    return (
        <div className='containerTopNewestFilm' style={{ height: '100%' }}>
            <Carousel auto>
                {show}
            </Carousel>
        </div>
    );
}

export default TopNewestFilm;