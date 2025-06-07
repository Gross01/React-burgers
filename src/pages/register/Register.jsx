import React from 'react';
import Authorization from "../../components/authorization/Authorization";
import {Button, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import PasswordInput from "../../UI/password-input/PasswordInput";
import {Link} from "react-router-dom";

const Register = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [userName, setUserName] = React.useState("");

    return (
        <Authorization title='Регистрация'>
            <Input
                placeholder='Имя'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                name='userName'
                size={'default'}
                type='text'
            />
            <EmailInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder='E-mail'
            />
            <PasswordInput placeholder='Пароль' value={password} setValue={setPassword}/>
            <Button htmlType="button" type="primary" size="medium">Зарегистрироваться</Button>
            <span className="text text_type_main-default text_color_inactive mt-15">Уже зарегистрированы?
                <Link className='link ml-2' to='/login'>Войти</Link>
            </span>
        </Authorization>
    );
};

export default Register;