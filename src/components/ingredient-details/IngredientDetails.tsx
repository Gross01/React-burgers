import styles from './IngredientDetails.module.css'
import {useSelector} from '../../services/store'
import {useParams} from "react-router-dom";
import {useMemo} from "react";
import {TIngredient} from "../../utils/types";

function IngredientDetails () {

    const params = useParams()
    const ingredients = useSelector(state => state.ingredients.items?.data)

    let currentIngredient = useMemo<TIngredient | undefined>(() => {
        if (!ingredients) return undefined
        return ingredients.find((item: TIngredient) => item['_id'] === params.id)
    }, [params, ingredients])

    if (!currentIngredient) {
        return null
    }

    return (
        currentIngredient &&
        <div className={styles.wrapper}>
            <img src={currentIngredient.image_large} alt={currentIngredient.name} width='480' height='240'/>
            <h3 className='text text_type_main-medium mt-4 mb-8'>{currentIngredient.name}</h3>
            <ul className={styles.list}>
                <li>
                    <span className="text text_type_main-default">Калории,ккал</span>
                    <span className="text text_type_digits-default">{currentIngredient.calories}</span>
                </li>
                <li>
                    <span className="text text_type_main-default">Белки, г</span>
                    <span className="text text_type_digits-default">{currentIngredient.proteins}</span>
                </li>
                <li>
                    <span className="text text_type_main-default">Жиры, г</span>
                    <span className="text text_type_digits-default">{currentIngredient.fat}</span>
                </li>
                <li>
                    <span className="text text_type_main-default">Углеводы, г</span>
                    <span className="text text_type_digits-default">{currentIngredient.carbohydrates}</span>
                </li>
            </ul>
        </div>
    )
}

export default IngredientDetails
