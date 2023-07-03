import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../layout/Layout.js';
import Home from '../components/home/Home.js';
import Film from '../components/film/Film.js';
import Actor from '../components/actor/Actor.js';
import Category from '../components/category/Category.js';
import Notification from '../components/notification/Notification.js';
import Account from '../components/account/Account.js';
import NoPage from '../components/noPage/NoPage.js';

function RouteLayout() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="film" element={<Film/>}/>
                <Route path="actor" element={<Actor/>}/>
                <Route path="category" element={<Category/>}/>
                <Route path="notification" element={<Notification/>}/>
                <Route path="account" element={<Account/>}/>
                <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        );
}

export default RouteLayout;