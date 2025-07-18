import React, {useMemo} from 'react';
import {useSelector} from "../../services/store";
import {useParams} from "react-router-dom";
import styles from './OrderInfo.module.css'

const OrderInfo = () => {

    const {id} = useParams()
    const orders = useSelector(store => store.ordersFeed.message?.orders)
    const ingredients = useSelector(state => state.ingredients.items?.data);
    const orderInfo = orders?.find(order => order['_id'] === id)

    const orderIngredients = useMemo(() => {
        return orderInfo?.ingredients.map(id => {
            if (ingredients) {
                return ingredients.find(ing => ing['_id'] === id);
            }
            return null
        })
    }, [orderInfo, ingredients])



    return (
        <div className={styles.div}>
            <span style={{alignSelf: 'center'}} className='text text text_type_digits-default mb-10'>{`#${orderInfo?.number}`}</span>
            <div style={{marginBottom: '60px'}}>
                <h3 className={`${styles.title} text text_type_main-default`}>{`${orderInfo?.name}`}</h3>
                <span className={`${styles.status} text text_type_main-default`}>
                    {orderInfo?.status === 'done' ? 'Выполнен' : 'Готовится'}
                </span>
            </div>
            <span className={`text text_type_main-medium mb-6`}>Состав:</span>
            <div>

            </div>
        </div>
    );
};

export default OrderInfo;