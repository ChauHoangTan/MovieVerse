import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

function CornerLove() {
    return (
        <div style={{ color: 'white', padding: '15px', marginRight: '3%', backgroundColor: '#312F2F', height: '20vh' }}>
            <div style={{ fontSize: '20px', fontWeight: '600' }}>
                Little Corner Of Love
            </div>
            <div className='d-flex' style={{ marginBottom: '15px' }}>
                <div style={{ flex: 1, height: '3px', backgroundColor: '#FFCA2B' }} />
                <div style={{ flex: 18, height: '1.5px', backgroundColor: '#4E4E4E' }} />
            </div>
            <div className='d-flex'>
                <div style={{ flex: 1 }} >
                    <Button variant="warning" className='py-2 px-2' style={{ fontWeight: '600', fontSize: '18px', marginRight: '3%' }}>
                        <FontAwesomeIcon icon={faThumbsUp} className='fs-5' style={{ marginRight: '6px' }} />
                        <span>
                            Like Page
                        </span>
                    </Button>
                </div>
                <div style={{ flex: 6 }}>
                    <span style={{ opacity: '0.8' }}>
                        Let's like and follow the Movie Verse page so that we don't miss out on the latest and most exciting movies updated every day, my friend
                    </span>
                    <span>
                        🥰 🥰 🥰
                    </span>
                </div>
            </div>
        </div >
    );
}

export default CornerLove