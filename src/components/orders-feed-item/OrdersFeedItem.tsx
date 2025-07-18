import React from 'react';
import styles from './OrdersFeedItem.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const OrdersFeedItem = () => {
    return (
        <div className={`${styles.order} p-6`}>
            <div className={styles.div}>
                <span className='text text text_type_digits-default'>#034535</span>
                <span className='text text_type_main-default text_color_inactive'>Сегодня, 16:20</span>
            </div>
            <div>
                <h3 className={`${styles.title} text text_type_main-default`}>Death Star Starship Main бургер</h3>
                <span className='text text_type_main-default'>Готовится</span>
            </div>
            <div className={styles.lastDiv}>
                <div className={styles.ingredients}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span className={`${styles.priceSpan} text text_type_digits-default`}>1976 <CurrencyIcon type='primary'/></span>
            </div>
        </div>
    );
};

export default OrdersFeedItem;