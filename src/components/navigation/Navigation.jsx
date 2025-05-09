import React from 'react'
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function Navigation () {
    return (
        <nav>
            <ul>
                <li>
                    <BurgerIcon/>
                    <a href='/'>Конструктор</a>
                </li>
                <li>
                    <ListIcon/>
                    <a href='/'>Лента заказов</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation