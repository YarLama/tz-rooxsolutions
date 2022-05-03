import React, { useEffect, useState } from 'react';
import { IUser } from '../../types/types';
import UserService from '../../API/UserService';
import UserList from '../../components/UserList/UserList';

const UsersPage: React.FC = () => {
    
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        const users = await UserService.getAll();
        setUsers(users)
    }

    return (
        <div>
            <h1>Список пользователей</h1>
            <UserList users={users}/>
        </div>
    );
}

export default UsersPage;