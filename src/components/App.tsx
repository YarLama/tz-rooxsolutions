import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/_global.scss'
import '../styles/_typography.scss'
import cl from './app.scss'
import SortList from './SortList/SortList';
import UserPage from '../pages/UsersPage/UserPage';


const App: React.FC = () => {

    return (
        <div className={cl.app}>
            <div className={cl.sort_block}>
                <SortList />
            </div>
            <div className={cl.content_block}>
                <UserPage />
            </div>
            
        </div>
    );
};

export default App;
  
  