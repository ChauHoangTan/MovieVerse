
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './LayoutStyle.css'

function Layout() {
    return ( 
    <>
        <nav>

            <div className='container'>
                <div className='wrapper'>
                    <span className='navigation'>
                        <Link to="/">Home</Link>
                    </span>
                    <span className='navigation'>
                        <Link to="/film">Film</Link>
                    </span>
                    <span className='navigation'>
                        <Link to="/actor">Actor</Link>
                    </span>
                    <span className='navigation'>
                        <Link to="/category">Category</Link>
                    </span>
                    <span className='navigation'>
                        <Link to="/notification">Notification</Link>
                    </span>
                    <span className='navigation'>
                        <Link to="/account">Account</Link>
                    </span>
                </div>
            </div>
            
                   
        </nav>

        <Outlet/>
    </> );
}

export default Layout;