import React from 'react';
import styles from "../../components/authorization/Authorization.module.css";

type TAuthorizationProps = {
    children: React.ReactNode;
    title?: string
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Authorization = ({children, title, onSubmit}: TAuthorizationProps) => {
    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <h2 className={`${styles.textSize} text text_type_main-large`}>{title}</h2>
            {children}
        </form>
    );
};

export default Authorization;