import React from 'react';
import {IUser} from '../../types/types'
import UserItem from '../UserItem/UserItem';
import cl from './userList.scss'

interface UserListProps {
    users: IUser[];
    isShowHowManyFound?: boolean;
}

const UserList: React.FC<UserListProps> = ({ 
    users, 
    isShowHowManyFound = true,
}) => {
    
    return (
        <div className={cl.user_list_block}>
            {users.map(user => 
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