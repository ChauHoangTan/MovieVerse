
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './LayoutStyle.css'
import Header from './Header';
import Footer from './Footer';

function Layout({children}) {
    return ( 
    <>
        <Header/>
            <Outlet/>
        <Footer/>
        
    </> );
}

export default Layout;