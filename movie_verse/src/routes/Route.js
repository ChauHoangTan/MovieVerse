import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../layout/Layout.js';
import Home from '../components/home/Home.js';
import Film from '../components/film/Film.js';
import Actor from '../components/actor/Actor.js';
import ActorDetails from '../components/actorDetails/ActorDetails.js'
import Account from '../components/account/Account/Account.js'
import LogIn from '../components/account/LogIn/Login.js';
import SignUp from '../components/account/SignUp/SignUp.js';
import NoPage from '../components/noPage/NoPage.js';

function RouteLayout() {
    return ( 
        <HashRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/:type/:id" element={<Film/>}/>
                <Route path="/actor" element={<Actor/>}/>
                <Route path='/actor/:id' element={<ActorDetails/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </HashRouter>
        );
}

export default RouteLayout;