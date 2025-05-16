import styles from './IngredientDetails.module.css'

function IngredientDetails ({cardInfo}) {

    return (
        <div className={styles.wrapper}>
            <img src={cardInfo.image_large} alt={cardInfo.name} width='480' height='240'/>
            <h3 className='text text_type_main-medium mt-4 mb-8'>{cardInfo.name}</h3>
            <ul className={styles.list}>
                <li>
                    <span className="text text_type_main-default">Калории,ккал</span>
                    <span className="text text_type_digits-default">{cardInfo.calories}</span>
                </li>
                <li>
                    <span className="text text_type_main-default">Белки, г</span>
                    <span className="text text_type_digits-default">{cardInfo.proteins}</span>
                </li>
                <li>
                    <span className="text text_type_main-default">Жиры, г</span>
                    <span className="text text_type_digits-default">{cardInfo.fat}</span>
                </li>
                <li>
                    <span className="text text_type_main-default">Углеводы, г</span>
                    <span className="text text_type_digits-default">{cardInfo.carbohydrates}</span>
                </li>
            </ul>
        </div>
    )
}

export default IngredientDetails
