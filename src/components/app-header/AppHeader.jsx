import React from 'react'
import { Logo, ProfileIcon, BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './AppHeader.module.css'
import Link from '../../UI/link/Link'

function AppHeader () {
    return (
        <header className={`${styles.header} p-4`}>
            <div className={styles.headerContainer}>
                <nav>
                    <ul className={styles.headerList}>
                        <li>
                            <Link text='Конструктор' Icon={BurgerIcon} href='/'/>
                        </li>
                        <li>
                            <Link text='Лента заказов' Icon={ListIcon} href='/'/>
                        </li>
                    </ul>
                </nav>
                <Logo/>
                <Link text='Личный кабинет' Icon={ProfileIcon} href='/'/>
            </div>    
        </header>
    )
}

export default AppHeader