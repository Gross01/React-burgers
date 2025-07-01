import React, {useEffect} from 'react';
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import Authorization from "../../components/authorization/Authorization";
import {Link} from "react-router-dom";
import PasswordInput from "../../UI/password-input/PasswordInput";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../services/user-info/thunk";
import ErrorMessage from "../../UI/error-message/ErrorMessage";
import {setError} from "../../services/user-info/slice";

const Login = (): React.JSX.Element => {

    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState('');
    //@ts-ignore
    const error = useSelector(state => state.userInfo.error);
    const dispatch = useDispatch();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //@ts-ignore
        dispatch(loginUser({password: password, email: email}))
    }

    useEffect(() => {
        dispatch(setError(false))
    }, [dispatch]);

    return (
        <Authorization title='Вход' onSubmit={onSubmit}>
            <EmailInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder='E-mail'
            />
            <PasswordInput placeholder='Пароль' value={password} setValue={setPassword}/>
            <Button htmlType="submit" type="primary" size="medium">Войти</Button>
            <span className="text text_type_main-default text_color_inactive mt-15">Вы — новый пользователь?
                <Link className='link ml-2' to='/register'>Зарегистрироваться</Link>
            </span>
            <span className="text text_type_main-default text_color_inactive">Забыли пароль?
                <Link className='link ml-2' to='/forgot-password'>Восстановить пароль</Link>
            </span>
            {error && <ErrorMessage message='Неправильный логин или пароль' />}
        </Authorization>
    );
};

export default Login;