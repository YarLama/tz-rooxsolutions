import React, { useContext, useEffect, useState } from 'react';
import { IUser } from '../../types/types';
import UserService from '../../API/UserService';
import UserList from '../../components/UserList/UserList';
import { SortContext } from '../../context';


const UsersPage: React.FC = ({}) => {
    
    const [users, setUsers] = useState<IUser[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const sortBy = useContext(SortContext);
    
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
            ? <UserList users={users} sortBy={sortBy.value}/>
            : <div>Loading...</div>
            }
            
        </div>
    );
}

export default UsersPage;