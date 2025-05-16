import styles from './OrderDetails.module.css'

function OrderDetails () {
    return (
        <div className={`${styles.content} pt-15 pb-15`}>
            <span className={`${styles.identificator} text text_type_digits-large mb-8`}>034536</span>
            <p className='text text_type_main-medium mb-15'>идентификатор заказа</p>
            <span className={styles.image}></span>
            <p className='text text_type_main-small mt-15 mb-2'>Ваш заказ начали готовить</p>
            <p className='text text_type_main-small' style={{color: '#8585AD'}}>Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export default OrderDetails