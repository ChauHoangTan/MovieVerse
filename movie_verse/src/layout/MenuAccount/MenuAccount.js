import React from 'react';
import './MenuAccount.scss'
import Toggle from '../../components/account/Account/Toggle/Toggle';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
function MenuAccount({state}) {

    const theme = useSelector(state => state.theme.theme)

    const navigate = useNavigate()
    const navigateToAccountPage = () => {
        navigate('/account')
    }

    const logout = () => {
        sessionStorage.removeItem('token')
        navigate('/signup')
    }
    return ( 
        <div className={`menuAccount ${theme} ${state}`}>
            <span onClick={navigateToAccountPage}>Dashboard <FontAwesomeIcon icon={faUser} className='icon'/></span>
            <span onClick={logout}>Log Out <FontAwesomeIcon icon={faRightFromBracket} className='icon'/></span>
        </div>
     );
}

export default MenuAccount;