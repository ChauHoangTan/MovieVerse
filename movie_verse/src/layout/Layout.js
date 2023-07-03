
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './LayoutStyle.scss'
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>);
}

export default Layout;