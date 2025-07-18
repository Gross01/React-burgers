import React from 'react';
import styles from './OrdersStatistics.module.css'

const OrdersStatistics = () => {
    return (
        <section className={styles.section}>
            <div className={styles.ordersWrapper}>
                <div className={styles.ordersDiv}>
                    <span className='text text_type_main-medium'>Готовы:</span>
                    <div className={`${styles.orders} ${styles.ordersReady}`}>
                        <span className='text text text_type_digits-default'>034533</span>
                        <span className='text text text_type_digits-default'>034533</span>
                        <span className='text text text_type_digits-default'>034533</span>
                        <span className='text text text_type_digits-default'>034533</span>
                    </div>
                </div>
                <div className={styles.ordersDiv}>
                    <span className='text text_type_main-medium'>В работе:</span>
                    <div className={styles.orders}>
                        <span className='text text text_type_digits-default'>034533</span>
                        <span className='text text text_type_digits-default'>034533</span>
                        <span className='text text text_type_digits-default'>034533</span>
                        <span className='text text text_type_digits-default'>034533</span>
                    </div>
                </div>
            </div>
            <div className={`${styles.readyOrders}`}>
                <span className='text text_type_main-medium'>Выполнено за все время:</span>
                <span className={`${styles.ordersCount} text text_type_digits-large`}>28 752</span>
            </div>
            <div className={`${styles.readyOrders}`}>
                <span className='text text_type_main-medium'>Выполнено за cегодня:</span>
                <span className={`${styles.ordersCount} text text_type_digits-large`}>120</span>
            </div>
        </section>
    );
};

export default OrdersStatistics;