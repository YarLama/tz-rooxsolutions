import React from 'react';
import {IUser} from '../../types/types'
import UserItem from '../UserItem/UserItem';
import cl from './userList.scss'

interface UserListProps {
    users: IUser[];
    sortBy?: string;
    isShowHowManyFound?: boolean;
}

const UserList: React.FC<UserListProps> = ({ 
    users,
    sortBy,
    isShowHowManyFound = true,
}) => {

    const usersList = users.map((user) => {
        return {
            id: user.id,
            name: user.name,
            city: user.address.city,
            company: user.company.name 
        }
    })

    const sortedUsersList = usersList.sort((a : any,b: any) => {
        let key = sortBy === undefined || 
            !a.hasOwnProperty(sortBy) || 
            !b.hasOwnProperty(sortBy)
                ? "id" 
                : sortBy;

        return a[key] < b[key] ? -1 : 1;
    })

    
    
    return (
        <div className={cl.user_list_block}>
            {sortedUsersList.map(user => 
                <UserItem key={user.id} user={user}/>
            )}
            {isShowHowManyFound 
                ? <h2 className={cl.user_list_found}>Найдено {users.length} пользователей</h2>
                : null
            }
        </div>
        
    );
}

export default UserList;