import React from 'react';
import styles from "./Profile.module.css";
import ProfileTabs from "../../components/profile-tabs/ProfileTabs";
import {Outlet} from "react-router-dom";

const Profile = () => {

    return (
        <div className={styles.div}>
            <ProfileTabs />
            <Outlet />
        </div>
    );
};

export default Profile;