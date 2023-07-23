import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

class _News {
    constructor(release, title, content) {
        this.release = release;
        this.title = title;
        this.content = content;
    }
}

function News() {
    var news1 = new _News('July-07', 'TOP 10 Film you must watch', 'Feature film is a vast field, there are many genres of films with different content and meanings. Watching movies is not only for entertainment, but every movie leaves opinions...')
    var news2 = new _News('July-07', 'TOP 10 Movie Anime you must watch', 'If you are a fan of anime movies but do not know which movie to watch for entertainment in your spare time, you can refer to this article...')
    var news3 = new _News('July-07', 'TOP 15 good and meaningful Japanese movies that you should not miss', 'When it comes to Japanese cinema, everyone will think of famous anime series around the world. But besides that, Japanese movies and TV series...')

    var newsList = [news1, news2, news3]
    const newListShow = newsList.map((news) =>
        <div>
            <div className='d-flex'>
                <div style={{ flex: '1' }}>
                    <div style={{ color: '#FFCA2B', textAlign: 'center' }}>7</div>
                    <div style={{ color: '#7A7A7A', textAlign: 'center', fontWeight: '700', marginTop: '-5px' }}>July</div>
                </div>
                <div style={{ flex: '12' }}>
                    <div>{news.title}</div>
                    <div style={{ color: '#7A7A7A', fontWeigh: '300', fontSize: '17px' }}>{news.content}</div>
                </div>
            </div>
            <hr />
        </div>
    );
    return (
        <div className='mt-1' >
            <div>
                {newListShow}
            </div>
            <div>
                <Button style={{ width: '100%', backgroundColor: 'transparent', fontWeight: '600', fontSize: '17px', border: '0', marginTop: '-1%', color: "#DEDDDD" }}>
                    More news <FontAwesomeIcon icon={faAnglesDown} style={{ color: "#DEDDDD", fontSize: '14px', marginLeft: '0.5%' }} />
                </Button>
            </div>
        </div>
    );
}

export default News