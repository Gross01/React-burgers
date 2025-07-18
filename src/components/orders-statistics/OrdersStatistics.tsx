import React, {useMemo} from 'react';
import styles from './OrdersStatistics.module.css'
import {TOrdersFeedMessage} from "../../utils/types";

type OrdersStatisticsProps = {
    ordersInfo: TOrdersFeedMessage | null
}

const OrdersStatistics = ({ordersInfo}: OrdersStatisticsProps) => {

    const readyOrders = useMemo(() => {
        return ordersInfo?.orders
                .filter(order => order.status === 'done')
                .map(order => order.number)
                .filter((order, i) => i <= 9)
    }, [ordersInfo]);

    const inWorkOrders = useMemo(() => {
        return ordersInfo?.orders
            .filter(order => order.status === 'in-work')
            .map(order => order.number)
            .filter((order, i) => i <= 9)
    }, [ordersInfo]);

    return (
        <section className={styles.section}>
            <div className={styles.ordersWrapper}>
                <div className={styles.ordersDiv}>
                    <span className='text text_type_main-medium'>Готовы:</span>
                    <div className={`${styles.orders} ${styles.ordersReady}`}>
                        {readyOrders?.map(order => (
                             <span key={order} className='text text text_type_digits-default'>{order}</span>
                        ))}
                    </div>
                </div>
                <div className={styles.ordersDiv}>
                    <span className='text text_type_main-medium'>В работе:</span>
                    <div className={styles.orders}>
                        {inWorkOrders?.map(order => (
                            <span key={order} className='text text text_type_digits-default'>{order}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`${styles.readyOrders}`}>
                <span className='text text_type_main-medium'>Выполнено за все время:</span>
                <span className={`${styles.ordersCount} text text_type_digits-large`}>{ordersInfo?.total}</span>
            </div>
            <div className={`${styles.readyOrders}`}>
                <span className='text text_type_main-medium'>Выполнено за cегодня:</span>
                <span className={`${styles.ordersCount} text text_type_digits-large`}>{ordersInfo?.totalToday}</span>
            </div>
        </section>
    );
};

export default OrdersStatistics;