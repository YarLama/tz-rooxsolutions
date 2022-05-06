import React, { useEffect, useState } from 'react';
import { IUser } from '../../types/types';
import UserService from '../../API/UserService';
import UserList from '../../components/UserList/UserList';

interface UserPageProps {
    sortBy?: string;
}

const UsersPage: React.FC<UserPageProps> = ({
    sortBy
}) => {
    
    const [users, setUsers] = useState<IUser[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        fetchUsers()
    }, [])


    async function fetchUsers() {
        const users = await UserService.getAll();
        setUsers(users)
        setIsLoading(true)
    }

    return (
        <div>
            <h1>Список пользователей</h1>
            {
            isLoading
            ? <UserList users={users} sortBy={sortBy}/>
            : <div>Loading...</div>
            }
            
        </div>
    );
}

export default UsersPage;