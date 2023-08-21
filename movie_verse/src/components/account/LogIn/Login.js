import React, { useEffect, useState } from 'react';
import './Login.scss'
import { faCircleUser,faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setLoginLogout } from './redux/Login_LogoutAction';
function LogIn() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [listAccount, setListAccount] = useState([])
    const [lock, setLock] = useState(true)

    const theme = useSelector(state => state.theme.theme);

    const dispatch = useDispatch();

    const handleInputUsername = (e) => {
        setUsername(e.target.value)
    }   

    const handleInputPassword = (e) => {
        setPassword(e.target.value)
    }   

    const navigate = useNavigate()

    const handlePostLogin = async () => {
        try{
            // kiểm tra thông tin đăng nhập từ server
            const response = await axios.post('http://localhost:4000/login', {username, password})
            // const token = response.data.token
    
            // nếu trả về một token, nghĩa là thông tin đăng nhập đúng
            console.log(response)
            if(response.data){
                sessionStorage.setItem('token', response.data)

                // set trạng thái tài khoản là true
                dispatch(setLoginLogout(true))
                // điều hướng đến home
                navigate('/')
                
            }

        }catch(err){
            console.log(err)
        }
    }
    const handleClickLogIn = (e) => {
        e.preventDefault()
        handlePostLogin()
        // if(username !== '' && password !== ''){
        //     navigate('/')
        // }
        

    }
    const handleClickSignUp = () => {
        
        navigate('/signup')
    }

    const handleLock = () => {
        setLock(false)
    }

    const handleUnLock = () => {
        setLock(true)
    }   


    console.log('render')
    return ( 
        <div className={`wrapperLogIn ${theme}`}>
            <div className='image'>
                {theme === 'light' ? 
                    <img src="https://anhdep123.com/wp-content/uploads/2021/08/Top-222-phong-canh-anime-dep-tuyet-voi-phai-xem-ngay-39.jpg"></img>:
                    <img src="https://img4.thuthuatphanmem.vn/uploads/2020/05/13/anh-nen-4k-anime_062606240.jpg"/> 
                }
                
                
            </div>
            <div className='form'>
                <span className='greeting fw-bold'>Welcome To Visit My Website</span>
                <form onSubmit={handleClickLogIn} method='POST'>

                    <div className='d-flex justify-content-center align-items-center login'>Log In</div>
                   
                    <div className='inputField my-4'>
                        <label htmlFor='username'>Username</label>
                        <br/>
                        <div>
                            <input 
                                type='text' 
                                id='username' 
                                name='username' 
                                placeholder='Username' 
                                value={username} 
                                onChange={handleInputUsername}/>
                            <FontAwesomeIcon className='icon text-dark' icon={faCircleUser}/>
                        </div>
                        
                    </div>
                    
                    <div className='inputField mt-4'>
                        <label htmlFor='password'>Password</label>
                        <br/>
                        <div>
                            <input  
                                type={`${lock ? 'password' : 'text'}`} 
                                id='password' 
                                name='password' 
                                placeholder='Password'
                                value={password}
                                onChange={handleInputPassword}/>
                            {lock ? (<FontAwesomeIcon className='icon text-dark lock' icon={faLock} onClick={handleLock}/>) 
                            : <FontAwesomeIcon className='icon text-dark lock' icon={faUnlock} onClick={handleUnLock}/>}
                            
                        </div>
                         
                    </div>

                    <div className='my-2'>
                        <label>
                            <input type='checkbox' /> Remember me
                        </label>

                        <a className='forgotPassword' href=''>Forgot password</a>
                    </div>

                    <div className='d-flex justify-content-between my-4'>
                        <button className='btn btn-success' type='submit'>Log in</button>
                        <button className='btn btn-danger' onClick={handleClickSignUp}>Sign up</button>
                    </div>
                    

                    <div className='my-4'>
                        <div className='text-center fs-5 my-2'>Log In By </div>
                        <div className='anotherWayLogin d-flex justify-content-center align-items-center'>
                            <div>
                                <img className='mx-2' style={{width:'40px', height:'40px'}} alt='FaceBook' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png'/>
                                <img className='mx-2' style={{width:'40px', height:'40px'}} alt='Google' src='https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png'/>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </form>
            </div>
        </div>
     );
}

export default LogIn;