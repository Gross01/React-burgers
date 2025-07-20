import React, {useEffect} from 'react';
import OrdersFeedItem from "../orders-feed-item/OrdersFeedItem";
import {useDispatch, useSelector} from "../../services/store";
import {wsConnect, wsDisconnect} from "../../services/orders-history/actions";
import styles from './OrdersHistory.module.css'
import Preloader from "../../UI/preloader/Preloader";

const OrdersHistory = (): React.JSX.Element => {

    const dispatch = useDispatch();
    const ordersInfo = useSelector(state => state.ordersHistory.message?.orders);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        dispatch(wsConnect(`wss://norma.nomoreparties.space/orders?token=${token}`));

        return () => {
            dispatch(wsDisconnect());
        }
    }, [dispatch]);

    const orders = ordersInfo
        ? [...ordersInfo].sort((a, b) => b.number - a.number)
        : []

    return (
        ordersInfo
            ?
            <div className={`${styles.ordersHistory} ml-15 custom-scrollbar`}>
                {orders?.map(order => {
                    return <OrdersFeedItem key={order._id} order={order} history={true}/>
                })}
            </div>
            :
            <div style={{display: 'grid', placeContent: 'center', width: '500px'}} className='ml-15'>
                <Preloader></Preloader>
            </div>
    );
};

export default OrdersHistory;