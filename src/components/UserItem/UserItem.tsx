import React from 'react';
import { Link } from 'react-router-dom';
import {IUserItem} from '../../types/types'
import cl from './userItem.scss'

interface UserItemProps {
    user: IUserItem,
    isShowMoreInfo?: boolean;

}

const UserItem: React.FC<UserItemProps> = ({ 
    user,
    isShowMoreInfo = true,

}) => {
    
    return (
        <div className={cl.user_item_block}>
            <div className={cl.user_item_main_info}>
                <p>
                    <span className={cl.user_item_field_name}>ФИО:</span> 
                    <span className={cl.user_item_field_value}>{user?.name}</span>
                </p>
                <p>
                    <span className={cl.user_item_field_name}>город:</span> 
                    <span className={cl.user_item_field_value}>{user?.city}</span>
                </p>
                <p>
                    <span className={cl.user_item_field_name}>компания:</span> 
                    <span className={cl.user_item_field_value}>{user?.company}</span>
                </p>
            </div>
            {isShowMoreInfo 
                ?   <Link to={`${user.id}`}>
                        <div className={cl.user_item_more_info}>
                            <p>Подробнее</p>
                        </div>
                    </Link>
                :   null
            }
            
        </div>
        
    );
}

export default UserItem;