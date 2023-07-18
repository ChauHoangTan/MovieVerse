import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

function RandomFilm() {
    return (
        <div style={{ color: 'white', padding: '15px', marginRight: '3%', backgroundColor: '#312F2F', height: '20vh' }}>
            <div style={{ fontSize: '20px', fontWeight: '600' }}>
                The weather is beautiful today, isn't it?
            </div>
            <div className='d-flex' style={{ marginBottom: '5px' }}>
                <div style={{ flex: 1, height: '3px', backgroundColor: '#FFCA2B' }} />
                <div style={{ flex: 8, height: '1.5px', backgroundColor: '#4E4E4E' }} />
            </div>
            <div style={{ marginBottom: '5px', opacity: '0.8' }}>
                Watch and enjoy a movie together
            </div>
            <div>
                <Button variant="warning" className='py-2 px-2' style={{ fontWeight: '600', fontSize: '18px', marginRight: '3%', width: '100%', textAlign: 'left' }}>
                    <FontAwesomeIcon icon={faCirclePlay} className='fs-5' style={{ marginRight: '6px' }} />
                    Play a
                    <span style={{ fontWeight: '900' }} className='mx-1'>
                        RANDOM
                    </span>
                    film
                </Button>
            </div>
        </div >
    );
}

export default RandomFilm