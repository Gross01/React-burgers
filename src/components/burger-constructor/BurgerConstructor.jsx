import {useMemo, useState} from 'react'
import styles from './BurgerConstructor.module.css'
import {CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../modal/Modal'
import OrderDetails from '../order-details/OrderDetails'
import {useSelector, useDispatch} from 'react-redux'
import ConstructorItems from '../constructor-items/ConstructorItems'
import {sendOrder} from '../../services/order/thunk'
import {useNavigate} from "react-router-dom";
import Preloader from "../../UI/preloader/Preloader";

function BurgerConstructor () {

    const [modalVisible, setModalVisible] = useState(false)
    const [disabledButton, setDisabledButton] = useState(false)

    const error = useSelector(store => store.order.error)
    const loading = useSelector(store => store.order.loading)
    const constructorItems = useSelector(store => store.constructorItems)
    const user = useSelector(store => store.userInfo?.user)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const itemsIngredietsId = useMemo(() =>
      constructorItems.map(item => {
        return item.ingredientId
      }
    ), [constructorItems])

    const modalHandler = () => {
      setModalVisible(!modalVisible)
    }

    const buttonHandler = () => {
        if (!user) {
            navigate('/login')
            return
        }
        modalHandler()
        dispatch(sendOrder(itemsIngredietsId))
    }

    const priceSum = useMemo(() => {
      return constructorItems.reduce((sum, item) => {
        if (item.bun) {
            return sum += (item.price * 2)
        }
        return sum += item.price
      }, 0)
    }, [constructorItems])

    return (
        <section className={`${styles.section} p-4 pt-25`}>
            {modalVisible && 
            !loading &&
            !error &&
              <Modal modalHandler={modalHandler} title={' '}>
                <OrderDetails/>
              </Modal>
            }

            <ConstructorItems setDisabled={setDisabledButton}/>

            <div className={`${styles.priceDiv} mt-10`}>
              <span className={`${styles.priceSpan} text text_type_main-medium`}>{priceSum} <CurrencyIcon/></span>
              <Button htmlType="button" type="primary" size="medium" disabled={disabledButton} onClick={buttonHandler}>
                {
                  loading 
                  ?  <Preloader/>
                  : 'Оформить заказ'
                }
              </Button>
            </div>
            {error && <p className={`${styles.errorText} text text_type_main-small mt-10`}>Ошибка загрузки, попробуйте еще раз</p>}
        </section> 
    )
}

export default BurgerConstructor