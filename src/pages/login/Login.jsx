import React from 'react';
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import Authorization from "../../components/authorization/Authorization";
import {Link} from "react-router-dom";
import PasswordInput from "../../UI/password-input/PasswordInput";

const Login = () => {

    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState('');

    return (
        <Authorization title='Вход'>
            <EmailInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder='E-mail'
            />
            <PasswordInput placeholder='Пароль' value={password} setValue={setPassword}/>
            <Button htmlType="button" type="primary" size="medium">Войти</Button>
            <span className="text text_type_main-default text_color_inactive mt-15">Вы — новый пользователь?
                <Link className='link ml-2' to='/register'>Зарегистрироваться</Link>
            </span>
            <span className="text text_type_main-default text_color_inactive">Забыли пароль?
                <Link className='link ml-2' to='/forgot-password'>Восстановить пароль</Link>
            </span>
        </Authorization>
    );
};

export default Login;