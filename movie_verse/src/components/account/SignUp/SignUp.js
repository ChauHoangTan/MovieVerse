import React, { useState } from 'react';
import './SignUp.scss'
import { faCircleUser,faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rewritePassword, setRewritePassword] = useState('')
    const handleInputUsername = (e) => {
        setUsername(e.target.value)
    }   

    const handleInputPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleInputRewritePassword = (e) => {
        setRewritePassword(e.target.value)
    }      

    const navigate = useNavigate()
    const handleClickSignUp = (e) => {
        e.preventDefault()
        if(username !== '' && password !== '' && password === rewritePassword){
            navigate('/login')
        }
        
    }

    console.log('render')
    return ( 
        <div className='wrapperSignUp'>
            <div className='image'>
                <img src="https://a-static.besthdwallpaper.com/nature-landscape-art-wallpaper-2048x1152-81119_49.jpg"/>
            </div>
            <div className='form'>
                <span className='greeting fw-bold'>Welcome To Visit My Website</span>
                <form onSubmit={handleClickSignUp}>

                    <div className='d-flex justify-content-center align-items-center fs-3'>Log In</div>
                   
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
                        <label htmlFor='rewritePassword'>Password</label>
                        <br/>
                        <div>
                            <input  
                                type='password' 
                                id='rewritePassword' 
                                name='rewritePassword' 
                                placeholder='Rewrite password...'
                                value={rewritePassword}
                                onChange={handleInputRewritePassword}/>
                            <FontAwesomeIcon className='icon text-dark' icon={faLock}/>
                        </div>
                         
                    </div>

                    <div className='my-2'>
                        <label>
                            <input type='checkbox' /> Remember me
                        </label>

                        <a className='forgotPassword' href=''>Forgot password</a>
                    </div>

                    <div className='d-flex justify-content-center my-4'>
                        <button className=' btn btn-success' type='submit'>Sign up</button>
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