import React, { useState } from 'react';
import './Account.scss'
import avatar from './avatar.png'
import { faEdit, faCamera, faCircleInfo, faHistory, faStar, faHeart, faBookmark, faComment, faList, faGear,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Toggle from './Toggle/Toggle.js'
import AccountInfomation from './AccountInfomation/AccountInfomation';
import ViewingHistory from './ViewingHistory/ViewingHistory';

function Account() {

    
    const [field, setField] = useState(0)

    // 0 - AccountInfomation
    // 1 - ViewingHistory
    // 2 - Ratings
    // 3 - Liked Movies
    // 4 - Bookmark
    // 5 - Comments
    // 6 - Playlist
    // 7 - Setting
    // 8 - Log out
    // 9 - Theme
    const setCurrentField = (index) => {
        setField(index)
        
    }

    const currrentField = () => {
        if(field === 0){
            return <AccountInfomation />
        }else if(field === 1){
            return <ViewingHistory />
        }else if(field === 2){
            return <ViewingHistory />
        }
        else if(field === 3){
            return <ViewingHistory />
        }
        else if(field === 4){
            return <ViewingHistory />
        }
        else if(field === 5){
            return <ViewingHistory />
        }
        else if(field === 6){
            return <ViewingHistory />
        }
        else if(field === 7){
            return <ViewingHistory />
        }
        else if(field === 8){
            return <ViewingHistory />
        }
        else{
            return <ViewingHistory />
        }
    }
    return (
        <div className='wrapperAccount'>
            <div className='headInfo'>
                <div className='changeBackground'>
                    <FontAwesomeIcon icon={faCamera} />
                    <span className='mx-2'>Change background</span>
                </div>
                <div className='wrapAvatar'>
                    <img className="avatar" src={avatar} />
                    <FontAwesomeIcon icon={faEdit} className='icon'/>
                    <span className='d-inline-block px-3 fs-5 text-dark fw-bold'>Châu Hoàng Tấn</span>
                </div>
                
            </div>
            <div className='containerAccount'>
                <div className='field'>
                    <div onClick={()=>setCurrentField(0)} className={`${field === 0 ? "text-danger" : ''}`}>Account Infomation <FontAwesomeIcon className='icon' icon={faCircleInfo}/></div>
                    <div onClick={()=>setCurrentField(1)} className={`${field === 1 ? "text-danger" : ''}`}>Viewing History <FontAwesomeIcon className='icon' icon={faHistory}/></div>
                    <div onClick={()=>setCurrentField(2)} className={`${field === 2 ? "text-danger" : ''}`}>Ratings <FontAwesomeIcon className='icon' icon={faStar}/></div>
                    <div onClick={()=>setCurrentField(3)} className={`${field === 3 ? "text-danger" : ''}`}>Liked Movies <FontAwesomeIcon className='icon' icon={faHeart}/></div>
                    <div onClick={()=>setCurrentField(4)} className={`${field === 4 ? "text-danger" : ''}`}>Bookmark <FontAwesomeIcon className='icon' icon={faBookmark}/></div>
                    <div onClick={()=>setCurrentField(5)} className={`${field === 5 ? "text-danger" : ''}`}>Comments <FontAwesomeIcon className='icon' icon={faComment}/></div>
                    <div onClick={()=>setCurrentField(6)} className={`${field === 6 ? "text-danger" : ''}`}>Playlist <FontAwesomeIcon className='icon' icon={faList}/></div>
                    <div onClick={()=>setCurrentField(7)} className={`${field === 7 ? "text-danger" : ''}`}>Setting <FontAwesomeIcon className='icon' icon={faGear}/></div>
                    <div onClick={()=>setCurrentField(8)} className={`${field === 8 ? "text-danger" : ''}`}>Log out <FontAwesomeIcon className='icon' icon={faArrowRightFromBracket}/></div>
                    <div onClick={()=>setCurrentField(9)} className={`${field === 9 ? "text-danger" : ''} theme`}>
                        <span className='d-flex align-items-center'>Theme</span> 
                        <Toggle />
                    </div>
                    
                </div>
                
                {currrentField()}
            </div>
            
            
        </div>
            
            

      );
}

export default Account;