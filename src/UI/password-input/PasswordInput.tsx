import React from 'react';
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";

type TPasswordInputProps = {
    value: string,
    setValue: (value: string) => void
    placeholder: string
}

type TInputType = 'password' | 'text'
type TIcon = 'HideIcon' | "ShowIcon"

const PasswordInput = ({value, setValue, placeholder}: TPasswordInputProps): React.JSX.Element => {
    const [passwordIcon, setPasswordIcon] = React.useState<TIcon>("HideIcon");
    const [inputType, setInputType] = React.useState<TInputType>("password");

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
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
        />
    );
};

export default PasswordInput;