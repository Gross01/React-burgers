import React from 'react';
import styles from "../../components/authorization/Authorization.module.css";
import ConstructorItem from "../constructor-item/ConstructorItem";
import {PropTypes} from 'prop-types'

const Authorization = ({children, title, onSubmit}) => {
    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <h2 className={`${styles.textSize} text text_type_main-large`}>{title}</h2>
            {children}
        </form>
    );
};

ConstructorItem.propTypes = {
    title: PropTypes.string,
};

export default Authorization;