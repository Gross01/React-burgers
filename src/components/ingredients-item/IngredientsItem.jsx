import React from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './IngredientsItem.module.css'
import Modal from '../modal/Modal'
import IngredientDetails from '../ingredient-details/IngredientDetails'

function IngredientsItem ({cardInfo}) {

    const [modalVisible, setModalVisible] = React.useState(false)

    const modalHandler = (e) => setModalVisible(!modalVisible)
    

    return (
        <>
            <li className={styles.li} onClick={modalHandler}>
                <img src={cardInfo.image} alt={cardInfo.name}/>
                <span className={`${styles.price} text text_type_digits-default m-1`}>{cardInfo.price} <CurrencyIcon type="primary" /></span>
                <p className={`${styles.name} text text_type_main-small m-1`}>{cardInfo.name}</p>
            </li>
            {modalVisible &&
            <Modal modalHandler={modalHandler} title='Детали ингредиента'>
                <IngredientDetails cardInfo={cardInfo}/>
            </Modal>}
        </>
    )
}

export default IngredientsItem