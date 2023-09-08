import React, { useState } from 'react';
import './SignUp.scss'
import { faCircleUser,faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useSelector } from 'react-redux';
function SignUp() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [notiErr, setNotiErr] = useState('')

    const theme = useSelector(state => state.theme.theme);

    const handleInputUsername = (e) => {
        setUsername(e.target.value)
        // xóa notiErr mỗi khi đổi tên tài khoản
        if(notiErr !== ''){
            setNotiErr('')
        }
    }   

    const handleInputPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleInputFullName = (e) => {
        setFullName(e.target.value)
    }      

    const navigate = useNavigate()
    const handleClickSignUp = (e) => {
        e.preventDefault()
        if(username !== '' && password !== '' && fullName !== ''){
            
                // gửi dữ liệu đến server để kiểm tra đăng ký hợp lệ không
                try{
                    const response = axios.post('http://localhost:4000/register', {username, password, fullName})

                    // response được gửi từ server là một promise
                    response.then((data)=>{
                        console.log(data.data)
                        if(data.data.status === true){
                            navigate('/login')
                        }else{
                            setNotiErr(data.data.title)
                        }
                    })
                    
                }catch(err){
                    console.log(err)
                }
            
        }
        
    }

    console.log('render')
    return ( 
        <div className={`wrapperSignUp ${theme}`}>
            <div className='image'>
                {theme === 'light' ? 
                    <img src="https://anhdep123.com/wp-content/uploads/2021/08/Top-222-phong-canh-anime-dep-tuyet-voi-phai-xem-ngay-39.jpg"></img>:
                    <img src="https://img4.thuthuatphanmem.vn/uploads/2020/05/13/anh-nen-4k-anime_062606240.jpg"/> 
                }
            </div>
            <div className='form'>
                <span className='greeting fw-bold'>Welcome To Visit My Website</span>
                <form onSubmit={handleClickSignUp}>

                    <div className='d-flex justify-content-center align-items-center fs-3 signUp'>Sign Up</div>
                   
                    <div className='inputField my-4'>
                        <label htmlFor='username'>Username</label>
                        <br/>
                        <div>
                            <input 
                                type='text' 
                                id='username' 
                                name='username' 
                                placeholder='Username...' 
                                value={username} 
                                onChange={handleInputUsername}/>
                            <FontAwesomeIcon className='icon text-dark' icon={faCircleUser}/>
                        </div>
                        <span className={`fs-6 mx-2 text-danger text-decoration-underline fst-italic ${notiErr === '' ? 'd-none' : 'd-inline-block'}`}>{notiErr}</span>
                    </div>
                    
                    <div className='inputField mt-4'>
                        <label htmlFor='password'>Password</label>
                        <br/>
                        <div>
                            <input  
                                type='password' 
                                id='password' 
                                name='password' 
                                placeholder='Password...'
                                value={password}
                                onChange={handleInputPassword}/>
                            <FontAwesomeIcon className='icon text-dark' icon={faLock}/>
                        </div>
                         
                    </div>

                    <div className='inputField mt-4'>
                        <label htmlFor='rewritePassword'>Full name</label>
                        <br/>
                        <div>
                            <input  
                                type='text' 
                                id='rewritePassword' 
                                name='rewritePassword' 
                                placeholder='Full name...'
                                value={fullName}
                                onChange={handleInputFullName}/>
                            <FontAwesomeIcon className='icon text-dark' icon={faLock}/>
                        </div>
                         
                    </div>

                    

                    <div className='d-flex justify-content-center my-4'>
                        <button className=' btn btn-success w-100' type='submit'>Sign up</button>
                    </div>
                    

                    <div className='my-4'>
                        <div className='text-center fs-5 my-2'>Log In By </div>
                        <div className='anotherWayLogin d-flex justify-content-center align-items-center'>
                            <div>
                                <img className='mx-2' style={{width:'40px', height:'40px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png'/>
                                <img className='mx-2' style={{width:'40px', height:'40px'}} src='https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png'/>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </form>
            </div>
        </div>
     );
}

export default SignUp;