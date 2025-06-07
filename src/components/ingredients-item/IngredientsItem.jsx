import React from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './IngredientsItem.module.css'
import {useDrag} from 'react-dnd'
import Count from '../../UI/count/Count'
import PropTypes from 'prop-types'
import {useNavigate, useLocation} from "react-router-dom";

function IngredientsItem ({cardInfo}) {
    const [{isDrag}, dragRef] = useDrag({
        type: 'ingredients',
        item: {
            name: cardInfo.name,
            image: cardInfo.image,
            price: cardInfo.price,
            bun: cardInfo.type === 'bun',
            ingredientId: cardInfo['_id']
        },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    })
    const navigate = useNavigate()
    const location = useLocation()

    const modalHandler = () => {
        navigate(`/ingredients/${cardInfo['_id']}`, {state: {background: location}})
    }

    const opacity = isDrag ? '0.5' : '1'

    const outline = isDrag ? '1px mediumpurple dashed' : 'none'

    return (
        <>
            <li ref={dragRef} className={styles.li} onClick={modalHandler} style={{ opacity: opacity, outline: outline }}>
                <img src={cardInfo.image} alt={cardInfo.name}/>
                <span className={`${styles.price} text text_type_digits-default m-1`}>{cardInfo.price} <CurrencyIcon type="primary" /></span>
                <p className={`${styles.name} text text_type_main-small m-1`}>{cardInfo.name}</p>
                <Count cardName={cardInfo.name} />
            </li>
        </>
    )
}

IngredientsItem.propTypes = {
    cardInfo: PropTypes.object.isRequired
}

export default IngredientsItem