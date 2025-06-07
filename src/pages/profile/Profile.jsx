import React from 'react';
import styles from "./Profile.module.css";
import ProfileTabs from "../../components/ProfileTabs/ProfileTabs";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import EditableInput from "../../UI/editable-input/EditableInput";

const Profile = () => {

    const [values, setValues] = React.useState({
        name: 'Артём',
        email: 'artem51055@mail.ru',
        password: '15211415',
    })

    const [showButton, setShowButton] = React.useState(false);

    const onChange = (e, input) => {
        setShowButton(true)
        setValues({...values, [input]: e.target.value});
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
                    <Button htmlType="button" type='primary'>Сохранить</Button>
                </div>}
            </div>
        </div>
    );
};

export default Profile;