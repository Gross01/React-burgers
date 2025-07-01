import React from 'react';
import Authorization from "../../components/authorization/Authorization";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {forgotPasswordRequest} from "../../utils/api";

const ForgotPassword = (): React.JSX.Element => {

    const [email, setEmail] = React.useState("");
    const navigate = useNavigate();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        forgotPasswordRequest(email)
            .then(() => {
                navigate('/reset-password');
            })
            .catch(err => console.log(err))
    }

    return (
        <Authorization onSubmit={onSubmit} title='Восстановление пароля'>
            <EmailInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder='Укажите e-mail'
            />
            <Button htmlType="submit" type="primary" size="medium">Восстановить</Button>
            <span className="text text_type_main-default text_color_inactive mt-15">Вспомнили пароль?
                <Link className='link ml-2' to='/login'>Войти</Link>
            </span>
        </Authorization>
    );
};

export default ForgotPassword;