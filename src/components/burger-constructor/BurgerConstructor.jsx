import React from 'react'
import styles from './BurgerConstructor.module.css'
import {CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../modal/Modal'
import OrderDetails from '../order-details/OrderDetails'
import {useSelector} from 'react-redux'
import {ConstructorItems} from '../constructor-items/ConstructorItems'


function BurgerConstructor () {

    const [modalVisible, setModalVisible] = React.useState(false)

    const constructorItems = useSelector(store => store.constructorItems)

    const modalHandler = () => setModalVisible(!modalVisible)

    const priceSum = constructorItems.reduce((sum, item) => {
      if (item.bun) {
          return sum += (item.price * 2)
      }
      return sum += item.price
    }, 0)

    return (
        <section className={`${styles.section} p-4 pt-25`}>
            {modalVisible && 
              <Modal modalHandler={modalHandler}>
                <OrderDetails/>
              </Modal>
            }

            <ConstructorItems />

            <div className={`${styles.priceDiv} mt-10`}>
              <span className={`${styles.priceSpan} text text_type_main-medium`}>{priceSum} <CurrencyIcon/></span>
              <Button htmlType="button" type="primary" size="medium" onClick={modalHandler}>
                Оформить заказ
              </Button>
            </div>
        </section> 
    )
}

export default BurgerConstructor