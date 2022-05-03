import React, { useState } from 'react';
import FormUserInfo from '../../components/FormUserInfo/FormUserInfo';
import {IUser} from '../../types/types';
import cl from './userInfoPage.scss'

interface UserInfoPageProps {
    user: IUser,
    comment?: string;
}

const UserInfoPage: React.FC<UserInfoPageProps> = ({user}) => {

    const [isReadonly, setReadOnly] = useState<boolean>(true)
    
    return (
        <div>
            <div className={cl.user_label_block}>
                <h1>Профиль пользователя</h1>
                <button onClick={() => {setReadOnly(!isReadonly)}}>Редактировать</button>
            </div>
            <FormUserInfo user={user} readonly={isReadonly}/>
        </div>
        
    );
}

export default UserInfoPage;