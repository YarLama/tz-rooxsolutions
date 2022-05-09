import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import '../styles/_global.scss'
import '../styles/_typography.scss'
import cl from './app.scss'
import SortList from './SortList/SortList';
import UsersPage from '../pages/UsersPage/UsersPage';
import UserInfoPage from '../pages/UserInfoPage/UserInfoPage';
import { SortContext } from '../context';
import AppRouter from './AppRouter/AppRouter';


const App: React.FC = () => {

    const [selectedSort, setSelectedSort] = useState<string>("id");

    const options = [
      { groupName: "group1", value: "city", label: "По городу" },
      { groupName: "group1", value: "company", label: "По компании" },
    ]

    const sortUsers = (selectedSort : string) => setSelectedSort(selectedSort);

    return (
        <SortContext.Provider value={{value: selectedSort}}>
            <BrowserRouter>
                <div className={cl.app}>
                    <div className={cl.sort_block}>
                        <SortList options={options} selectedValue={sortUsers}/>
                    </div>
                    <div className={cl.content_block}>
                        <AppRouter />
                    </div>  
                </div>
            </BrowserRouter>
        </SortContext.Provider>
        
    );
};

export default App;
  
  