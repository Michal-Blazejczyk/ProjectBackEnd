import React from "react";
import {HashRouter as Router} from 'react-router-dom';

import AsideMenu from "./commponents/AsideMenu/AsideMenu";

import Header from "./commponents/Header/Header";
import StoreProvider from "./store/storeProvider";


import './App.scss';


const App = () => (

    <StoreProvider>
            <Header/>
                <Router>
                    <div className='content-wrapper'>
                        <AsideMenu />
                    </div>
                </Router>
    </StoreProvider>
            
           
    
);
export default App;