import React from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './IngredientsItem.module.css'
import Modal from '../modal/Modal'
import IngredientDetails from '../ingredient-details/IngredientDetails'
import {useDrag} from 'react-dnd'
import Count from '../../UI/count/Count'

function IngredientsItem ({cardInfo}) {

    const [{isDrag}, dragRef] = useDrag({
        type: 'ingredients',
        item: {
            name: cardInfo.name,
            image: cardInfo.image,
            price: cardInfo.price,
            bun: cardInfo.type === 'bun'
        },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    })

    const [modalVisible, setModalVisible] = React.useState(false)

    const modalHandler = () => { setModalVisible(!modalVisible)}

    const opacity = isDrag ? '0.5' : '1'

    const outline = isDrag ? '1px mediumpurple dashed' : 'none'

    return (
        <>
            <li ref={dragRef} className={styles.li} onClick={modalHandler} style={{ opacity: opacity, outline: outline }}>
                <img src={cardInfo.image} alt={cardInfo.name}/>
                <span className={`${styles.price} text text_type_digits-default m-1`}>{cardInfo.price} <CurrencyIcon type="primary" /></span>
                <p className={`${styles.name} text text_type_main-small m-1`}>{cardInfo.name}</p>
                <Count cardInfo={cardInfo} />
            </li>
            {modalVisible &&
            <Modal modalHandler={modalHandler} title='Детали ингредиента'>
                <IngredientDetails cardInfo={cardInfo}/>
            </Modal>}
        </>
    )
}

export default IngredientsItem