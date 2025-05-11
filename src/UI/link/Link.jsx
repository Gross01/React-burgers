import React from 'react'
import styles from './Link.module.css'

function Link ({Icon, text, href}) {
    return (
        <a className={`${styles.link} text text_type_main-default`} href={href}>
            <Icon/> {text}
        </a>
    )
}

export default Link