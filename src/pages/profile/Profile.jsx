import React, {useEffect} from 'react';
import styles from "./Profile.module.css";
import ProfileTabs from "../../components/profile-tabs/ProfileTabs";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import EditableInput from "../../UI/editable-input/EditableInput";
import {useDispatch, useSelector} from "react-redux";
import {changeUserInfo} from "../../services/user-info/thunk";

const Profile = () => {

    const user = useSelector(state => state.userInfo.user);
    const dispatch = useDispatch();

    const [values, setValues] = React.useState({
        name: '',
        email: '',
        password: '',
    })

    const [showButton, setShowButton] = React.useState(false);

    useEffect(() => {
        if (user) {
            setValues(prevState => ({
                ...prevState,
                name: user.name || '',
                email: user.email || '',
            }))
        }
    }, [user]);

    const onChange = (e, input) => {
        setShowButton(true)
        setValues({...values, [input]: e.target.value});
    }

    const onClick = () => {
        dispatch(changeUserInfo({
            name: values.name,
            email: values.email,
            password: values.password
        }))
    }

    return (
        <div className={styles.div}>
            <ProfileTabs />
            <div className={`${styles.wrapper} ml-15`}>
                <EditableInput
                    type="text"
                    placeholder='Имя'
                    name={'userName'}
                    value={values.name ?? ''}
                    onChange={(e) => onChange(e, 'name')}
                />
                <EditableInput
                    placeholder='Логин'
                    name={'email'}
                    value={values.email ?? ''}
                    onChange={(e) => onChange(e, 'email')}
                />
                <EditableInput
                    type={"password"}
                    placeholder='Пароль'
                    name={'password'}
                    value={values.password ?? ''}
                    onChange={(e) => onChange(e, 'password')}
                />

                {showButton &&
                <div className={styles.buttonsWrapper}>
                    <Button htmlType="button" type='secondary' onClick={() => setShowButton(false)}>Отмена</Button>
                    <Button htmlType="button" type='primary' onClick={onClick}>Сохранить</Button>
                </div>}
            </div>
        </div>
    );
};

export default Profile;