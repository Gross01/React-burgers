import React from 'react';
import styles from "../../components/authorization/Authorization.module.css";

const Authorization = ({children, title}) => {
    return (
        <div className={styles.div}>
            <h2 className={`${styles.textSize} text text_type_main-large`}>{title}</h2>
            {children}
        </div>
    );
};

export default Authorization;