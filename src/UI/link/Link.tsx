import React, {FC} from 'react'
import styles from './Link.module.css'
import {NavLink} from "react-router-dom";

type TLinkProps = {
    Icon: FC<{type: 'primary' | 'secondary'}>,
    text: string
    path: string
}

function Link({Icon, text, path}: TLinkProps): React.JSX.Element {

    const linkClass = ({isActive}: {
        isActive: boolean
    }) => isActive ? `${styles.link} text text_type_main-default active`
        : `${styles.link} text text_type_main-default text_color_inactive`

    return (
        <NavLink to={path} className={linkClass}>
            {({isActive}) => (
                <>
                    {isActive ? <Icon type='primary'/> : <Icon type='secondary'/>}
                    {text}
                </>
            )}
        </NavLink>
    )
}

export default Link