import React from 'react';
import Authorization from "../../components/authorization/Authorization";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import PasswordInput from "../../UI/password-input/PasswordInput";

const ResetPassword = () => {

    const [password, setPassword] = React.useState("");
    const [code, setCode] = React.useState("");

    return (
        <Authorization title='Восстановление пароля'>
            <PasswordInput placeholder='Введите новый пароль' value={password} setValue={setPassword} />
            <Input
                type='text'
                name='code'
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder='Введите код из письма'
            />
            <Button htmlType="button" type="primary" size="medium">Сохранить</Button>
            <span className="text text_type_main-default text_color_inactive mt-15">Вспомнили пароль?
                <Link className='link ml-2' to='/login'>Войти</Link>
            </span>
        </Authorization>
    );
};

export default ResetPassword;