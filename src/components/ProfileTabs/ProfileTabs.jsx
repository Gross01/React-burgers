import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './ProfileTabs.module.css';

const ProfileTabs = () => {

    const linkClass = ({isActive}) => isActive ?
        `text text_type_main-default ${styles.tabsText} active` : `text text_type_main-default ${styles.tabsText} text_color_inactive`;

    return (
        <div className={styles.div}>
            <NavLink className={linkClass} to="/profile">Профиль</NavLink>
            <NavLink className={linkClass} to="*">История заказов</NavLink>
            <NavLink className={linkClass} to="*">Выход</NavLink>

            <span className='text text_type_main-small text_color_inactive mt-20'>В этом разделе вы можете изменить свои персональные данные</span>
        </div>
    );
};

export default ProfileTabs;