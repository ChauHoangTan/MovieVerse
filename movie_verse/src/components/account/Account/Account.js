import React, { useState } from 'react';
import './Account.scss'
import avatar from './avatar.png'
import { faEdit, faCamera, faCircleInfo, faHistory, faStar, faHeart, faBookmark, faComment, faList, faGear,faArrowRightFromBracket, faK, faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Toggle from './Toggle/Toggle.js'
import AccountInfomation from './AccountInfomation/AccountInfomation';
import ViewingHistory from './ViewingHistory/ViewingHistory';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setThemeMode } from '../../themeModeRedux/themeModeAction';
import { setLoginLogout } from '../LogIn/redux/Login_LogoutAction';

function Account() {

    // để gọi action cho theme mode
    const dispatch = useDispatch();
    // lấy dữ liệu theme mode
    const theme = useSelector(state => state.theme.theme)
    console.log(theme)

    const [field, setField] = useState(0)
    const navigate = useNavigate();
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
            return <AccountInfomation/>
        }else if(field === 1){
            return <ViewingHistory title='Viewing History'/>
        }else if(field === 2){
            return <ViewingHistory title='Ratings'/>
        }
        else if(field === 3){
            return <ViewingHistory title='Liked Movies'/>
        }
        else if(field === 4){
            return <ViewingHistory title='Bookmarks'/>
        }
        else if(field === 5){
            return <ViewingHistory title='Comments'/>
        }
        else if(field === 6){
            return <ViewingHistory title='Playlist'/>
        }
        else if(field === 7){
            return <ViewingHistory />
        }
        else if(field === 8){
            sessionStorage.removeItem('token')
            // set trạng thái tài khoản là false
            dispatch(setLoginLogout(false))
            navigate('/login')
        }
        else{
            
        }
    }

    const handleSetThemeMode = () => {
        dispatch(setThemeMode())
    }

    const chooseFile = () => {
        document.querySelector('#chooseFile').click();
    }
    return (
        <div className={`wrapperAccount ${theme}`}>
            <div className='headInfo'>
                <div className='changeBackground'>
                    <FontAwesomeIcon icon={faCamera} />
                    <span className='mx-2 highlight' onClick={chooseFile}>Change background</span>
                    <div style={{display: 'none'}}>
                        <input id='chooseFile' type='file' accept="image/*"/>
                    </div>
                </div>
                <div className='wrapAvatar'>
                    <img className="avatar" src={avatar} />
                    <FontAwesomeIcon icon={faEdit} className='icon' onClick={chooseFile} style={{cursor:'pointer'}}/>
                    <span className='d-inline-block px-3 fw-bold highlight'>Châu Hoàng Tấn</span>
                </div>
                
            </div>
            <div className='containerAccount'>
                <div className='field'>
                    <div onClick={()=>setCurrentField(0)} className={`${field === 0 ? "text-danger" : ''}`}><span>Infomation</span> <FontAwesomeIcon className='icon' icon={faCircleInfo}/></div>
                    <div onClick={()=>setCurrentField(1)} className={`${field === 1 ? "text-danger" : ''}`}><span>History</span> <FontAwesomeIcon className='icon' icon={faHistory}/></div>
                    <div onClick={()=>setCurrentField(2)} className={`${field === 2 ? "text-danger" : ''}`}><span>Ratings</span> <FontAwesomeIcon className='icon' icon={faStar}/></div>
                    <div onClick={()=>setCurrentField(3)} className={`${field === 3 ? "text-danger" : ''}`}><span>Favorites</span> <FontAwesomeIcon className='icon' icon={faHeart}/></div>
                    <div onClick={()=>setCurrentField(4)} className={`${field === 4 ? "text-danger" : ''}`}><span>Bookmark</span> <FontAwesomeIcon className='icon' icon={faBookmark}/></div>
                    <div onClick={()=>setCurrentField(5)} className={`${field === 5 ? "text-danger" : ''}`}><span>Comments</span> <FontAwesomeIcon className='icon' icon={faComment}/></div>
                    <div onClick={()=>setCurrentField(6)} className={`${field === 6 ? "text-danger" : ''}`}><span>Playlist </span><FontAwesomeIcon className='icon' icon={faList}/></div>
                    <div onClick={()=>setCurrentField(7)} className={`${field === 7 ? "text-danger" : ''}`}><span>Setting</span> <FontAwesomeIcon className='icon' icon={faGear}/></div>
                    <div onClick={()=>setCurrentField(8)} className={`${field === 8 ? "text-danger" : ''}`}><span>Log out</span> <FontAwesomeIcon className='icon' icon={faArrowRightFromBracket}/></div>
                    <div onClick={handleSetThemeMode} className={`${field === 9 ? "text-danger" : ''} theme`}>
                        <span className='d-flex align-items-center'>Theme</span> 
                        <Toggle mode={theme === 'light' ? true : false}/>
                    </div>
                    
                </div>
                
                {currrentField()}
            </div>
            
            
        </div>
            
            

      );
}

export default Account;