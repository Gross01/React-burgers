import React, {useEffect} from 'react';
import styles from "../../pages/profile/Profile.module.css";
import EditableInput from "../../UI/editable-input/EditableInput";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {setUserInfoIsChange} from "../../services/user-info/slice";
import {changeUserInfo} from "../../services/user-info/thunk";
import {useDispatch, useSelector} from "react-redux";

const ChangeUserInfo = (): React.JSX.Element => {

    const [values, setValues] = React.useState({
        name: '',
        email: '',
        password: '',
    })
    //@ts-ignore
    const user = useSelector(state => state.userInfo.user);
    const dispatch = useDispatch();
    //@ts-ignore
    const userInfoIsChange = useSelector(state => state.userInfo.userInfoIsChange);
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

    useEffect(() => {
        setTimeout(() => {
            dispatch(setUserInfoIsChange(false))
        }, 5000)
    }, [userInfoIsChange, dispatch])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, input: string) => {
        setShowButton(true)
        setValues({...values, [input]: e.target.value});
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //@ts-ignore
        dispatch(changeUserInfo({
            name: values.name,
            email: values.email,
            password: values.password
        }))
    }

    return (
        <form className={`${styles.wrapper} ml-15`} onSubmit={onSubmit}>
            <EditableInput
                type="text"
                placeholder='Имя'
                name={'userName'}
                value={values.name ?? ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, 'name')}
            />
            <EditableInput
                type={'email'}
                placeholder='Логин'
                name={'email'}
                value={values.email ?? ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, 'email')}
            />
            <EditableInput
                type={"password"}
                placeholder='Пароль'
                name={'password'}
                value={values.password ?? ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, 'password')}
            />

            {showButton &&
                <div className={styles.buttonsWrapper}>
                    <Button htmlType="button" type='secondary' onClick={() => setShowButton(false)}>Отмена</Button>
                    <Button htmlType="submit" type='primary'>Сохранить</Button>
                </div>}

            {userInfoIsChange &&
                <span className={`text text_type_main-small`} style={{alignSelf: 'flex-end'}}>
                        Информация о пользователе успешно сохранена
                </span>}
        </form>
    );
};

export default ChangeUserInfo;