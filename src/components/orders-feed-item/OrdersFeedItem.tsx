import React, {useMemo} from 'react';
import styles from './OrdersFeedItem.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {TOrdersFeedItem} from "../../utils/types";
import {useSelector} from "../../services/store";
import {getOrderTime} from "../../utils/get-order-time";
import {useLocation, useNavigate} from "react-router-dom";

type TOrdersFeedItemProps = {
    order: TOrdersFeedItem
}

const OrdersFeedItem = ({order}: TOrdersFeedItemProps) => {

    const ingredients = useSelector(state => state.ingredients.items?.data);
    const navigate = useNavigate();
    const location = useLocation();

    const orderIngredients = useMemo(() => {
        return order.ingredients.map(id => {
            if (ingredients) {
                return ingredients.find(ing => ing['_id'] === id);
            }
            return null
        })
    }, [order, ingredients])

    const price = useMemo((): number => {
        if (!orderIngredients || orderIngredients.length === 0) return 0;

        return orderIngredients.reduce((sum, item) => {
            const withoutCopy = Array.from(new Set(orderIngredients))
            const price = item?.price ?? 0;
            if (withoutCopy.length !== 1) {
                if (item?.type === 'bun') {
                    return sum + price * 2
                }
            }
            return sum + price;
        }, 0);
    }, [orderIngredients]);

    const [day, time] = getOrderTime(order.createdAt)

    return (
        <li onClick={() => navigate(`/feed/${order._id}`, {state: {background: location}})} className={`${styles.order} p-6`} id={order._id}>
            <div className={styles.div}>
                <span className='text text text_type_digits-default'>{`#${order.number}`}</span>
                <span className='text text_type_main-default text_color_inactive'>{`${day}, ${time}`}</span>
            </div>
            <div>
                <h3 className={`${styles.title} text text_type_main-default`}>{`${order.name}`}</h3>
                <span className='text text_type_main-default'>
                    {order.status === 'done' ? 'Выполнен' : 'Готовится'}
                </span>
            </div>
            <div className={styles.lastDiv}>
                <div className={styles.ingredients}>
                    {orderIngredients?.map((ingredient, i) => (
                        order.ingredients.length < 7
                            ?
                            <div key={i} style={{
                                backgroundImage: `url(${ingredient?.image_mobile})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center center',
                                backgroundSize: '100px 50px',
                            }}></div>
                            :
                            <div key={i} className={styles.ingredient} style={{
                                backgroundImage: `url(${ingredient?.image_mobile})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center center',
                                backgroundSize: '100px 50px',
                            }}>
                                <div className={`${styles.ingredientBack} text_type_digits-small`}>{`+ ${order.ingredients.length - 6}`}</div>
                            </div>
                    ))}
                </div>
                <span className={`${styles.priceSpan} text text_type_digits-default`}>{price} <CurrencyIcon type='primary'/></span>
            </div>
        </li>
    );
};

export default OrdersFeedItem;