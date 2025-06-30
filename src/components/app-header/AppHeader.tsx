import { Logo, ProfileIcon, BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './AppHeader.module.css'
import Link from '../../UI/link/Link'
import {useSelector} from "react-redux";
import React from "react";

function AppHeader (): React.JSX.Element {
    //@ts-ignore
    const userName = useSelector(state => state.userInfo.user?.name)

    return (
        <header className={`${styles.header} p-4`}>
            <div className={styles.headerContainer}>
                <nav>
                    <ul className={styles.headerList}>
                        <li>
                            <Link text='Конструктор' Icon={BurgerIcon} path='/'/>
                        </li>
                        <li>
                            <Link text='Лента заказов' Icon={ListIcon} path='/*'/>
                        </li>
                    </ul>
                </nav>
                <Logo/>
                <Link text={userName || 'Личный кабинет'} Icon={ProfileIcon} path='/profile'/>
            </div>    
        </header>
    )
}

export default AppHeader