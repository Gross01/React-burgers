import React from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './IngredientsItem.module.css'

function IngredientsItem ({cardInfo}) {
    return (
        <li className={styles.li}>
            <img src={cardInfo.image} alt={cardInfo.name}/>
            <span className={`${styles.price} text text_type_digits-default m-1`}>{cardInfo.price} <CurrencyIcon type="primary" /></span>
            <p className={`${styles.name} text text_type_main-small m-1`}>{cardInfo.name}</p>
        </li>
    )
}

export default IngredientsItem