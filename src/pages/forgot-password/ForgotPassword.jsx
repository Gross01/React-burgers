import React from 'react';
import Authorization from "../../components/authorization/Authorization";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

const ForgotPassword = () => {

    const [email, setEmail] = React.useState("");

    return (
        <Authorization title='Восстановление пароля'>
            <EmailInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder='Укажите e-mail'
            />
            <Button htmlType="button" type="primary" size="medium">Восстановить</Button>
            <span className="text text_type_main-default text_color_inactive mt-15">Вспомнили пароль?
                <Link className='link ml-2' to='/login'>Войти</Link>
            </span>
        </Authorization>
    );
};

export default ForgotPassword;