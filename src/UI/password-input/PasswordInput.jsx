import React from 'react';
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";

const PasswordInput = ({value, setValue, placeholder}) => {
    const [passwordIcon, setPasswordIcon] = React.useState("HideIcon");
    const [inputType, setInputType] = React.useState("password");

    const onIconClick = () => {
        if (passwordIcon === "HideIcon") {
            setPasswordIcon("ShowIcon")
            setInputType("text")
        } else {
            setPasswordIcon("HideIcon")
            setInputType("password")
        }
    }

    return (
        <Input
            type={inputType}
            placeholder={placeholder}
            icon={passwordIcon}
            onIconClick={onIconClick}
            error={false}
            value={value}
            size={'default'}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export default PasswordInput;