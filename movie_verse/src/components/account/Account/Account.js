import React, { useState } from 'react';
import './Account.scss'
import defaultAvatar from './avatar.png'
import { faEdit, faCamera, faCircleInfo, faHistory, faStar, faHeart, faBookmark, faComment, faList, faGear,faArrowRightFromBracket, faK, faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Toggle from './Toggle/Toggle.js'
import AccountInfomation from './AccountInfomation/AccountInfomation';
import ViewingHistory from './ViewingHistory/ViewingHistory';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setThemeMode } from '../../themeModeRedux/themeModeAction';
import { setLoginLogout } from '../LogIn/redux/Login_LogoutAction';
import axios from 'axios';
import { useEffect } from 'react';


function Account() {

    const [background, setBackground] = useState()
    const [avatar, setAvatar] = useState()

    const [fullName, setFullName] = useState('')
    const token = sessionStorage.getItem('token')
    const headers = {
        Authorization: `Bearer ${token}`,
      };

    const getInfoFromAPI = async() => {
        const response = await axios.get('http://localhost:4000/account/info', {headers})
        const result = response.data
        if(result.fullName !== undefined){
            setFullName(result.fullName)
        }

        if(result.background !== undefined){
            setBackground(`http://localhost:4000/update/image/${result.background}`)
        }

        if(result.avatar !== undefined){
            setAvatar(`http://localhost:4000/update/image/${result.avatar}`)
        }

    }

    useEffect(() => {
        getInfoFromAPI()

    },[])

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

    const chooseFileBackground = () => {
        document.querySelector('#chooseFileBackground').click();
    }

    const chooseFileAvatar =() => {
        document.querySelector('#chooseFileAvatar').click();
    }

    const handleChooseFile = async (e, taskName) => {
        // lấy file được chọn
        const file = e.target.files[0]
        // tạo url tạm thời cho file ảnh
        file.image = URL.createObjectURL(file)

        // hàm sử dụng chung cho background và avatar
        // nếu như chọn file cho background
        if(taskName === 'background'){
            // set url cho background
            setBackground(file.image)

            // gửi file sang cho server lưu trữ
            const formData = new FormData();
            formData.append('background',file)
            formData.append('type','background')
            formData.append('token', sessionStorage.getItem('token'))
            await axios.post('http://localhost:4000/account/update/image',formData, {
                // gửi formData với content-type là multipart/form-data để xử lý
                // multer bên express js
                headers: {
                  'Content-Type': 'multipart/form-data',
                }})

        }
        // nếu chọn file cho avatar
        else{
            // set url cho avatar
            setAvatar(file.image)

            // gửi file ảnh avatar sang server lưu trữ
            const formData = new FormData();
            formData.append('avatar',file)
            formData.append('type','avatar')
            formData.append('token', sessionStorage.getItem('token'))
            await axios.post('http://localhost:4000/account/update/image',formData, {
                // gửi formData với content-type là multipart/form-data để xử lý
                // multer bên express js
                headers: {
                  'Content-Type': 'multipart/form-data',
                }})

        }
        
    }

    useEffect(()=>{
        return () =>{
            {background && (URL.revokeObjectURL(background.image))}
            {avatar && (URL.revokeObjectURL(avatar.image))}
        }
    },[background])

    let backgroundStyle = 'url(https://www.pixel4k.com/wp-content/uploads/2020/01/alien-moon-nature_1580055622.jpg)';
    if(background !== undefined){
        backgroundStyle = `url(${background})`
    }

    return (
        <div className={`wrapperAccount ${theme}`}>
    
            <div className='headInfo' style={{backgroundImage: backgroundStyle}}>
                <div className='changeBackground'>
                    <FontAwesomeIcon icon={faCamera} />
                    <span className='mx-2 highlight' onClick={chooseFileBackground}>Change background</span>
                    <div style={{display: 'none'}}>
                        <input id='chooseFileBackground' type='file' accept="image/*" onChange={(e)=>handleChooseFile(e,'background')}/>
                    </div>
                </div>
                <div className='wrapAvatar'>
                    <div style={{display: 'none'}}>
                        <input id='chooseFileAvatar' type='file' accept="image/*" onChange={(e)=>handleChooseFile(e,'avatar')}/>
                    </div>
                    {avatar === undefined ? 
                        (<img className="avatar" src={defaultAvatar} />) 
                        : 
                        (<img className="avatar" src={avatar} />)}
                    <FontAwesomeIcon icon={faEdit} className='icon' onClick={chooseFileAvatar} />
                    <span className='d-inline-block px-3 fw-bold highlight'>{fullName}</span>
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