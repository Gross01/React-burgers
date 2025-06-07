import React from 'react';
import {EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";

const EditableInput = ({type, ...props}) => {
    const [disabled, setDisabled] = React.useState(true);
    const [currentIcon, setCurrentIcon] = React.useState("EditIcon");

    const onIconClick = () => {
        if (currentIcon === "EditIcon") {
            setDisabled(false)
            setCurrentIcon('CloseIcon')
        } else {
            setDisabled(true)
            setCurrentIcon('EditIcon')
        }
    }

    return (
        type === 'email'
            ?
            <EmailInput {...props} type={type} disabled={disabled} icon={currentIcon} onIconClick={onIconClick}/>
            :
            <Input {...props} type={type} disabled={disabled} icon={currentIcon} onIconClick={onIconClick}/>
    );
};

export default EditableInput;