import { Formik, Form, Field } from 'formik';
import React from 'react';
import {IUser} from '../../types/types'

interface IFormValues {
    name : string;
    username : string;
    email: string;
    street: string;
    city: string;
    zip: string;
    phone: string;
    website: string;
}

interface UserInfoPageProps {
    user: IUser,
}

const UserInfoPage: React.FC<UserInfoPageProps> = ({user}) => {
    const initialValues: IFormValues = {
        name : '',
        username : '',
        email: '',
        street: '',
        city: '',
        zip: '',
        phone: '',
        website: '',
    };
    
    return (
        <div>
            <h1>Профиль пользователя</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log(values, actions)
                }}
            >
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field name="name"/>

                    <label htmlFor="username">User name</label>
                    <Field name="username"/>

                    <label htmlFor="email">E-mail</label>
                    <Field name="email"/>

                    <label htmlFor="street">Street</label>
                    <Field name="street"/>

                    <label htmlFor="city">City</label>
                    <Field name="city"/>

                    <label htmlFor="zip">Zip code</label>
                    <Field name="zip"/>

                    <label htmlFor="phone">Phone</label>
                    <Field name="phone"/>

                    <label htmlFor="website">Website</label>
                    <Field name="website"/>

                    <button>Отправить</button>
                </Form>
            </Formik>
        </div>
        
    );
}

export default UserInfoPage;