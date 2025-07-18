import React, {useEffect} from 'react';
import OrdersFeedItem from "../../components/orders-feed-item/OrdersFeedItem";
import styles from './OrdersFeed.module.css'
import OrdersStatistics from "../../components/orders-statistics/OrdersStatistics";
import {useDispatch, useSelector} from "../../services/store";
import {wsConnect, wsDisconnect} from "../../services/orders-feed/actions";

const OrdersFeed = () => {

    const ordersInfo = useSelector(state => state.ordersFeed.message);
    const connected = useSelector(state => state.ordersFeed.connected);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnect('wss://norma.nomoreparties.space/orders/all'))

        return () => {
            dispatch(wsDisconnect());
        }
    }, [dispatch])

    if (!connected) return null;

    return (
        <>
            <section className='pt-10'>
                <h2 className='text text_type_main-large mb-5'>Лента заказов</h2>
                <ul className={`${styles.feed} custom-scrollbar pr-2`}>
                    {ordersInfo?.orders.map((order) => {
                        return <OrdersFeedItem key={order._id} order={order}/>
                    })}
                </ul>
            </section>
            <OrdersStatistics ordersInfo={ordersInfo}/>
        </>
    );
};

export default OrdersFeed;