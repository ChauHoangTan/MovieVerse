
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './LayoutStyle.scss'
import Header from './Header';
import Footer from './Footer';

function Layout() {
    return (
        <div id='containerApp'>
           <div id='header'>
                <Header />
            </div> 


            <div id='outlet'>
                <Outlet />
            </div>

            <Footer />
        </div>);
}

export default Layout;