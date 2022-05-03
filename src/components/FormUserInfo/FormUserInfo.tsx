import React, { ChangeEvent } from 'react';
import {IUser} from '../../types/types'
import { FormikHelpers, useFormik, FormikProps } from 'formik';
import cl from './formUserInfo.scss';
import FormInputText from '../UI/FormItem/FormInputText/FormInputText';
import FormInputTextArea from '../UI/FormItem/FormInputTextArea/FormInputTextArea';

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

interface IFormErrors {
    name?: string;
    username?: string;
    email?: string;
    street?: string;
    city?: string;
    zip?: string;
    phone?: string;
    website?: string;
    comment?: string;
}

interface FormUserInfoProps {
    user: IUser,
    comment?: string;
    readonly?: boolean;
}

const FormUserInfo: React.FC<FormUserInfoProps> = ({ 
    user,
    comment = "",
    readonly = true
}) => {

    const initialValues: IFormValues = {
        name : user.name,
        username : user.username,
        email: user.email,
        street: user.address?.street,
        city: user.address?.city,
        zip: user.address?.zipcode,
        phone: user.phone,
        website: user.website,
        comment: comment
    };

    const submitData = (
        values: IFormValues, 
        actions: FormikHelpers<IFormValues>): void => {
        console.log(values, actions)
    }

    const validateData = (values: IFormValues) => {
        const errors : IFormErrors = {};
        if (!values.name) errors.name = 'name field is required';
        if (!values.username) errors.username = 'username field is required';
        if (!values.email) errors.email = 'email field is required';
        if (!values.street) errors.street = 'street field is required';
        if (!values.city) errors.city = 'city field is required';
        if (!values.zip) errors.zip = 'zip field is required';
        if (!values.phone) errors.phone = 'phone field is required';
        if (!values.website) errors.website = 'website field is required';
        return errors;
    }

    const formik = useFormik({
        initialValues: initialValues,
        validate: validateData,
        onSubmit: submitData,
    })

    return (
        <form onSubmit={formik.handleSubmit} className={cl.user_form} autoComplete="off">
                <div className={cl.user_form_fields}>
                    <FormInputText 
                        name="name" 
                        label="Name"
                        errorExpression={formik.errors.name ? true : false}
                        value={formik.values.name}
                        handleChange={formik.handleChange}
                        readonly={readonly}
                        errorClassName={cl.error_field}
                    />
                    <FormInputText 
                        name="username" 
                        label="User name"
                        errorExpression={formik.errors.username ? true : false}
                        value={formik.values.username}
                        handleChange={formik.handleChange}
                        readonly={readonly}
                        errorClassName={cl.error_field}
                    />
                    <FormInputText 
                        name="email" 
                        label="E-mail"
                        errorExpression={formik.errors.email ? true : false}
                        value={formik.values.email}
                        handleChange={formik.handleChange}
                        readonly={readonly}
                        errorClassName={cl.error_field}
                    />
                    <FormInputText 
                        name="street" 
                        label="Street"
                        errorExpression={formik.errors.street ? true : false}
                        value={formik.values.street}
                        handleChange={formik.handleChange}
                        readonly={readonly}
                        errorClassName={cl.error_field}
                    />
                    <FormInputText 
                        name="city" 
                        label="City"
                        errorExpression={formik.errors.city ? true : false}
                        value={formik.values.city}
                        handleChange={formik.handleChange}
                        readonly={readonly}
                        errorClassName={cl.error_field}
                    />
                    <FormInputText 
                        name="zip" 
                        label="Zip code"
                        errorExpression={formik.errors.zip ? true : false}
                        value={formik.values.zip}
                        handleChange={formik.handleChange}
                        readonly={readonly}
                        errorClassName={cl.error_field}
                    />
                    <FormInputText 
                        name="phone" 
                        label="Phone"
                        errorExpression={formik.errors.phone ? true : false}
                        value={formik.values.phone}
                        handleChange={formik.handleChange}
                        readonly={readonly}
                        errorClassName={cl.error_field}
                    />
                    <FormInputText 
                        name="website" 
                        label="Website"
                        errorExpression={formik.errors.website ? true : false}
                        value={formik.values.website}
                        handleChange={formik.handleChange}
                        readonly={readonly}
                        errorClassName={cl.error_field}
                    />
                    <FormInputTextArea 
                        name="comment" 
                        label="Comment"
                        value={formik.values.comment}
                        handleChange={formik.handleChange}
                        readonly={readonly}
                    />
                </div>
                <div className={cl.user_form_tooltip}>
                    <button type='submit' disabled={readonly}>Отправить</button>
                </div>
            </form>
    );
}

export default FormUserInfo;