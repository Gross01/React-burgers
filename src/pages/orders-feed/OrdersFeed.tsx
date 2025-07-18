import React from 'react';
import OrdersFeedItem from "../../components/orders-feed-item/OrdersFeedItem";
import styles from './OrdersFeed.module.css'
import OrdersStatistics from "../../components/orders-statistics/OrdersStatistics";

const OrdersFeed = () => {
    return (
        <>
            <section className='pt-10'>
                <h2 className='text text_type_main-large mb-5'>Лента заказов</h2>
                <div className={`${styles.feed} custom-scrollbar pr-2`}>
                    <OrdersFeedItem />
                    <OrdersFeedItem />
                    <OrdersFeedItem />
                    <OrdersFeedItem />
                    <OrdersFeedItem />
                    <OrdersFeedItem />
                    <OrdersFeedItem />
                    <OrdersFeedItem />
                </div>
            </section>
            <OrdersStatistics />
        </>
    );
};

export default OrdersFeed;