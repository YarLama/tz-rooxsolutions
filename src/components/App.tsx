import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/_global.scss'
import '../styles/_typography.scss'
import cl from './app.scss'
import UserService from '../API/UserService'
import { IUser } from '../types/types';
import UserList from './UserList/UserList';
import SortList from './SortList/SortList';


const App = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        const users = await UserService.getAll();
        setUsers(users)
    }

    return (
        <div className={cl.app}>
            <div className={cl.sort_block}>
                <SortList />
            </div>
            <div className={cl.content_block}>
                <UserList users={users} />
            </div>
            
        </div>
    );
};

export default App;
  
  