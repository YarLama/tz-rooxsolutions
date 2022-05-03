import { Formik, Form, Field, FormikHelpers, useField, useFormik } from 'formik';
import React, { useState } from 'react';
import {IUser} from '../../types/types';
import cl from './userInfoPage.scss'

interface IFormValues {
    name : string;
    username : string;
    email: string;
    street: string;
    city: string;
    zip: string;
    phone: string;
    website: string;
    comment?: string;
}

interface UserInfoPageProps {
    user: IUser,
    comment?: string;
}


const UserInfoPage: React.FC<UserInfoPageProps> = ({user}) => {

    const [isFieldsDisabled, setIsFieldDisabled] = useState<boolean>(true)

    const initialValues: IFormValues = {
        name : user.name,
        username : user.username,
        email: user.email,
        street: user.address.street,
        city: user.address.city,
        zip: user.address.zipcode,
        phone: user.phone,
        website: user.website,
        comment: ""
    };

    const submitData = (
        values: IFormValues, 
        actions: FormikHelpers<IFormValues>): void => {
        console.log(values, actions)
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit : submitData
    })
    
    return (
        <div>
            <div className={cl.user_label_block}>
                <h1>Профиль пользователя</h1>
                <button onClick={() => {setIsFieldDisabled(!isFieldsDisabled)}}>Редактировать</button>
            </div>
            <form onSubmit={formik.handleSubmit} className={cl.user_form}>
                <div className={cl.user_form_fields}>
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    name="name" 
                    placeholder="name" 
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    disabled = {isFieldsDisabled}
                    />

                    <label htmlFor="username">User name</label>
                    <input
                    type="text"
                    name="username" 
                    placeholder="username" 
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    disabled = {isFieldsDisabled}
                    />

                    <label htmlFor="email">E-mail</label>
                    <input
                    type="text"
                    name="email" 
                    placeholder="email" 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    disabled = {isFieldsDisabled}
                    />

                    <label htmlFor="street">Street</label>
                    <input
                    type="text"
                    name="street" 
                    placeholder="street" 
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    disabled = {isFieldsDisabled}
                    />

                    <label htmlFor="city">City</label>
                    <input
                    type="text"
                    name="city" 
                    placeholder="city" 
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    disabled = {isFieldsDisabled}
                    />

                    <label htmlFor="zip">Zip code</label>
                    <input
                    type="text" 
                    name="zip" 
                    placeholder="zip" 
                    value={formik.values.zip}
                    onChange={formik.handleChange}
                    disabled = {isFieldsDisabled}
                    />

                    <label htmlFor="phone">Phone</label>
                    <input
                    type="text" 
                    name="phone" 
                    placeholder="phone" 
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    disabled = {isFieldsDisabled}
                    />

                    <label htmlFor="website">Website</label>
                    <input
                    type="text" 
                    name="website" 
                    placeholder="website" 
                    value={formik.values.website}
                    onChange={formik.handleChange}
                    disabled = {isFieldsDisabled}
                    />
                    
                    <label htmlFor="comment">Comment</label>
                    <textarea 
                        name="comment"
                        value={formik.values.comment}
                        onChange={formik.handleChange}
                        disabled = {isFieldsDisabled}
                    />
                </div>
                <div className={cl.user_form_tooltip}>
                    <button type='submit' disabled={isFieldsDisabled}>Отправить</button>
                </div>
            </form>
        </div>
        
    );
}

export default UserInfoPage;