import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './ProfileTabs.module.css';
import {useDispatch} from "react-redux";
import {logoutUser} from "../../services/user-info/thunk";

const ProfileTabs = () => {

    const dispatch = useDispatch();

    const buttonHandler = () => {
        dispatch(logoutUser())
    }

    const linkClass = ({isActive}) => isActive ?
        `text text_type_main-default ${styles.tabsText} active` : `text text_type_main-default ${styles.tabsText} text_color_inactive`;

    return (
        <div className={styles.div}>
            <NavLink className={linkClass} to="/profile" end>Профиль</NavLink>
            <NavLink className={linkClass} to="/profile/orders">История заказов</NavLink>
            <button className={styles.logoutButton} onClick={buttonHandler}>
                <span className={`text text_type_main-default ${styles.tabsText} text_color_inactive`}>Выход</span>
            </button>
            <span className='text text_type_main-small text_color_inactive mt-20'>В этом разделе вы можете изменить свои персональные данные</span>
        </div>
    );
};

export default ProfileTabs;