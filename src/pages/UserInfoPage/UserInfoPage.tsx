import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../../API/UserService';
import FormUserInfo from '../../components/FormUserInfo/FormUserInfo';
import {IUser} from '../../types/types';
import cl from './userInfoPage.scss'

interface UserInfoPageProps {
    comment?: string;
}

const UserInfoPage: React.FC<UserInfoPageProps> = () => {

    const [isReadonly, setReadOnly] = useState<boolean>(true)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [user, setUser] = useState<IUser>(undefined)
    const params = useParams();
    
    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        const responce = await UserService.getUser(params.id);
        setUser(responce)
        setIsLoading(true)
    }

    return (
        
        <div>
            <div className={cl.user_label_block}>
                <h1>Профиль пользователя</h1>
                <button onClick={() => {setReadOnly(!isReadonly)}}>Редактировать</button>
            </div>
            {
            isLoading
            ? <FormUserInfo user={user} readonly={isReadonly}/>
            : <div>Loading...</div>
            }
            
        </div>
        
    );
}

export default UserInfoPage;