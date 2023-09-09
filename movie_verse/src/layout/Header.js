import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../assets/images/logo/logo_3.png'
import search from '../assets/images/icon/search.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import defaultAvatar from '../assets/images/avatar/avatar.png'
import { useDispatch, useSelector } from 'react-redux';

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import Search from './Search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Toggle from '../components/account/Account/Toggle/Toggle';
import MenuAccount from './MenuAccount/MenuAccount';
function Header() {

    const APIkey = 'a50a061b1989216e2c7931d35fc20896';

    const [inputSearch, setInputSearch] = useState('')
    const [listSearch, setListSearch] = useState([])    

    const [avatar, setAvatar] = useState()
    // lấy avatar của người dùng nếu có
    const token = sessionStorage.getItem('token')
    const headers = {
        Authorization: `Bearer ${token}`,
      };
    const getInfoFromAPI = async() => {
        const response = await axios.get('http://localhost:4000/account/info', {headers})
        const result = response.data

        if(result.avatar !== undefined){
            setAvatar(`http://localhost:4000/update/image/${result.avatar}`)
        }else{
            setAvatar(defaultAvatar)
        }

    }

    useEffect(() => {
        if(token !== null){
            getInfoFromAPI()
        }else{
            setAvatar(defaultAvatar)
        }
        

    },[])

    // lấy danh sách các phim được suearch dựa theo từ khóa
    const getListSearchFromAPI = async (query) => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${APIkey}&query=${query}&include_adult=false&language=en-US&page=1`)
        const results = response.data.results

        setListSearch(results)
        return results

    }

    const handleChangeSearch = async (e) => {
        setInputSearch(e.target.value)
        await getListSearchFromAPI(e.target.value);
        
    }

    const handleRemoveSearch = () => {
        setInputSearch('')
    }


    /////////////handle responve menu/////////////
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const handleOpenMenu = () => {
        if(isOpenMenu){
            setIsOpenMenu(false)
        }else{
            setIsOpenMenu(true)
        }
    }


    // check click vào avatar thì menu xuất hiện
    const [stateAvatar, setStateAvatar] = useState('hidden')
    const handleClickAvatar = () => {
        if(stateAvatar === 'hidden'){
            setStateAvatar('show')
        }else{
            setStateAvatar('hidden')
        }
    }
    return (
        <>
            <div className='header'>
                <div className='containerHeader'>

                    <img src={logo} alt="Logo" className="logo-page" style={{ marginLeft:'10px', marginRight: "100px" }} />

                    <div className='wrapNav'>
                        <div className='link'>
                            <Link to="/" className="title">Home</Link>
                            <Link to="/actor" className="title">Actor</Link>
                            <span className="toggle"><Toggle/></span>
                        </div>
                        

                        <div className='wrapRight'>
                            <form className='d-inline-block mx-2' >
                                <div className='search'>
                                    <input placeholder='Search...' style={{ width: '400px' }}
                                        value={inputSearch}
                                        onChange={handleChangeSearch}/>
                                    {inputSearch !== '' ? <FontAwesomeIcon icon={faXmark} className='iconX' onClick={handleRemoveSearch}/> : ''}
                                    <Button variant="warning btnSearch">
                                        <img src={search} alt="Search" style={{ width: "25px" }} />
                                    </Button>

                                    {inputSearch !== '' ? <Search list={listSearch}/> : ''}
                                </div>
                                
                            </form>

                            {sessionStorage.getItem('token') === null ? 
                                        (<Button variant="warning" className='accountState' style={{ fontWeight: "bold", height: '45px' }}>
                                        <Link to="/login" className='text-dark text-decoration-none'>Sign In</Link>
                                    </Button>) :
                                        <div className='avatar'>
                                            <img src={avatar} className='accountState' style={{width: '50px', height:'50px', borderRadius: '50%', cursor:'pointer' ,
                                                                        marginRight: '10px'}}
                                                onClick={handleClickAvatar}/>
                                            <MenuAccount state={stateAvatar}/>
                                        </div>}
                        </div>

                        
                    </div>
                    
                    <div className='menu' onClick={()=>handleOpenMenu()}>
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
                    
                </div>

                <div className={`menuOpened ${isOpenMenu===true ? 'show' : 'hidden'}`}>
                    <div className='d-flex justify-content-center py-3'>
                        <Link to="/" className='titleMenu'>Home</Link>
                    </div>

                    <div className='d-flex justify-content-center py-3'>
                        <Link to="/actor" className='titleMenu'>Actor</Link>
                    </div>
                    <div className='d-flex justify-content-center py-3'>
                        <span className="toggle"><Toggle/></span>
                    </div>
                    
                    <div className='wrapSearch py-1'>
                        <form className='d-inline-block mx-2' >
                            <div className='search'>
                                <input placeholder='Search...'
                                    value={inputSearch}
                                    onChange={handleChangeSearch}/>
                                {inputSearch !== '' ? <FontAwesomeIcon icon={faXmark} className='iconX' onClick={handleRemoveSearch}/> : ''}
                                <Button variant="warning btnSearch">
                                    <img src={search} alt="Search" style={{ width: "25px" }} />
                                </Button>

                                {inputSearch !== '' ? <Search list={listSearch}/> : ''}
                            </div>
                            
                        </form>

                        {sessionStorage.getItem('token') === null ? 
                                    (<Button variant="warning" className='accountState' style={{ fontWeight: "bold", height: '45px' }}>
                                    <Link to="/login" className='text-dark text-decoration-none'>Sign In</Link>
                                </Button>) :
                                    <img src={avatar} className='accountState' style={{width: '50px', height:'50px', borderRadius: '50%', cursor:'pointer' ,
                                                                marginRight: '10px'}}
                                        />}
                    </div>
                </div>
            </div>

        </>);
}

export default Header;