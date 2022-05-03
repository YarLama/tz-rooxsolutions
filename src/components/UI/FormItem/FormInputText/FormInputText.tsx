import React from 'react';

interface IFormInputText{
    name: string;
    label: string;
    errorExpression?: boolean;
    errorClassName?: string;
    value: string;
    placeholder?: string;
    readonly?: boolean;
    handleChange: {
        (e: React.ChangeEvent<any>): void;
        <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> 
        ? void 
        : (e: string | React.ChangeEvent<any>) => void;
    };
}

const FormInputText: React.FC<IFormInputText> = ({
    name = "inputText",
    errorExpression = false,
    label = 'Nameless',
    errorClassName = "error_input_text",
    value = "",
    placeholder = "",
    readonly = false,
    handleChange = () => {}
}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
            type="text"
            name={name} 
            placeholder={placeholder} 
            className={errorExpression? errorClassName : null}
            value={value}
            onChange={handleChange}
            disabled = {readonly}
            />
        </>
    )
}

export default FormInputText;