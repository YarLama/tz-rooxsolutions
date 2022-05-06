import React, { useEffect, useState } from 'react';
import { IAddress, IGeo, IUser } from '../../types/types';
import UserService from '../../API/UserService';
import UserList from '../../components/UserList/UserList';

interface UserPageProps {
    sortBy?: string;
}

const UsersPage: React.FC<UserPageProps> = ({
    sortBy
}) => {
    
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
            <UserList users={users} sortBy={sortBy}/>
        </div>
    );
}

export default UsersPage;