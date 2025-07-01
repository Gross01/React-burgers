import React from 'react';
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";

type TIcons = 'EditIcon' | 'CloseIcon'

const EditableInput = ({...props}): React.JSX.Element => {
    const [disabled, setDisabled] = React.useState(true);
    const [currentIcon, setCurrentIcon] = React.useState<TIcons>("EditIcon");

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
            <Input value={''}
                   onChange={() => undefined}
                   onPointerEnterCapture={undefined}
                   onPointerLeaveCapture={undefined}
                   {...props}
                   disabled={disabled}
                   icon={currentIcon}
                   onIconClick={onIconClick}
            />
    );
};

export default EditableInput;