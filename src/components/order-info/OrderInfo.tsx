import React, {useEffect, useMemo, useState} from 'react';
import {useSelector} from "../../services/store";
import {useParams} from "react-router-dom";
import styles from './OrderInfo.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {getOrderTime} from "../../utils/get-order-time";
import {getOrderPrice} from "../../utils/get-order-price";
import {useDispatch} from "../../services/store";
import {getOrderInfo} from "../../services/order/thunk";
import {TOrdersFeedItem} from "../../utils/types";
import {removeOrder} from "../../services/order/slice";

type TParams = {
    orderNumber: string;
}

const OrderInfo = () => {

    const {orderNumber} = useParams<TParams>()
    const orders = useSelector(store => store.ordersFeed.message?.orders)
    const ordersHistory = useSelector(store => store.ordersHistory.message?.orders)
    const ordersHistoryConnected = useSelector(store => store.ordersHistory.connected)
    const connected = useSelector(state => state.ordersFeed.connected);
    const ingredients = useSelector(state => state.ingredients.items?.data);
    const httpOrderInfo = useSelector(store => store.order.order)
    const dispatch = useDispatch();
    const order = orders?.find(order => +order.number === +orderNumber!);
    const historyOrder = ordersHistory?.find(order => +order.number === +orderNumber!);
    const [orderInfo, setOrderInfo] = useState<TOrdersFeedItem | null>(() => {
        if (historyOrder) {
            return historyOrder
        }

        if (order) {
            return order
        }
        return null
    })

    useEffect(() => {
        if (!connected && !orders && !ordersHistory && !ordersHistoryConnected && !httpOrderInfo) {
            dispatch(getOrderInfo(+orderNumber!))
        }

        if (httpOrderInfo) {
            setOrderInfo(httpOrderInfo)
        }

        return () => {
            dispatch(removeOrder())
        }
    }, [httpOrderInfo, dispatch, orders, connected, orderNumber, ordersHistoryConnected, ordersHistory]);

    let orderIngredients = useMemo(() => {
        return orderInfo?.ingredients.map(id => {
            if (ingredients) {
                return ingredients.find(ing => ing['_id'] === id);
            }
            return null
        })
    }, [orderInfo, ingredients])

    const price = useMemo(() => {
        return getOrderPrice(orderIngredients)
    }, [orderIngredients])

    orderIngredients = Array.from(new Set(orderIngredients))

    const ingredientCount = (id: string | undefined) => {
        return orderInfo?.ingredients.filter(ing => ing === id).length
    }

    if (!orderInfo) {
        return null
    }

    const [day, time] = getOrderTime(orderInfo?.createdAt)

    return (
        orderInfo &&
        <div className={styles.div}>
            <span style={{alignSelf: 'center'}} className='text text text_type_digits-default mb-10'>{`#${orderInfo?.number}`}</span>
            <div style={{marginBottom: '60px'}}>
                <h3 className={`${styles.title} text text_type_main-default`}>{`${orderInfo?.name}`}</h3>
                <span className={`${styles.status} text text_type_main-default`}>
                    {orderInfo?.status === 'done' ? 'Выполнен' : 'Готовится'}
                </span>
            </div>
            <span className={`text text_type_main-medium mb-6`}>Состав:</span>
            <div className={`${styles.ingredients} custom-scrollbar`}>
                {orderIngredients.map(ingredient => {
                    return <div key={ingredient?._id} className={styles.ingredient}>
                        <div className={styles.image}
                            style={{
                                backgroundImage: `url(${ingredient?.image_mobile})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center center',
                                backgroundSize: '100px 50px',
                            }}
                        ></div>
                        <span className='text text_type_main-default'>{ingredient?.name}</span>
                        <span className={`${styles.priceSpan} text text_type_digits-default`}>
                            {ingredient?.type === 'bun' ? 2 : ingredientCount(ingredient?._id)} X {ingredient?.price} <CurrencyIcon type='primary'/>
                        </span>
                    </div>
                })}
            </div>
            <div className={styles.footerDiv}>
                <span className='text text_type_main-default text_color_inactive'>{`${day}, ${time}`}</span>
                <span className={`${styles.priceSpan} text text_type_digits-default`}>{price} <CurrencyIcon type='primary'/></span>
            </div>
        </div>
    );
};

export default OrderInfo;