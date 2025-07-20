import React, {useEffect} from 'react';
import Authorization from "../../components/authorization/Authorization";
import {Button, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import PasswordInput from "../../UI/password-input/PasswordInput";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "../../services/store";
import {registerUser} from "../../services/user-info/thunk";
import ErrorMessage from "../../UI/error-message/ErrorMessage";
import {setError} from "../../services/user-info/slice";

const Register = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const error = useSelector(state => state.userInfo.error)
    const loading = useSelector(state => state.userInfo.loading);
    const dispatch = useDispatch();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(registerUser({name: userName, password: password, email: email}))
    }

    useEffect(() => {
        dispatch(setError(false))
    }, [dispatch]);

    return (
        <Authorization onSubmit={onSubmit} title='Регистрация'>
            <Input
                placeholder='Имя'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                name='userName'
                size={'default'}
                type='text'
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
            />
            <EmailInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder='E-mail'
            />
            <PasswordInput placeholder='Пароль' value={password} setValue={setPassword}/>
            <Button htmlType="submit" type="primary" size="medium">
                {loading ? 'Обработка' : 'Зарегистрироваться'}
            </Button>
            <span className="text text_type_main-default text_color_inactive mt-15">Уже зарегистрированы?
                <Link className='link ml-2' to='/login'>Войти</Link>
            </span>
            {error && <ErrorMessage message='Неверно введена информация, либо пользователь уже существует'/>}
        </Authorization>
    );
};

export default Register;