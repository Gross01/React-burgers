import styles from './IngredientsList.module.css'
import IngredientsItem from '../ingredients-item/IngredientsItem'
import {TIngredient} from "../../utils/types";

type IngredientsListProps = {
    ingredients: TIngredient[]
}

function IngredientsList ({ingredients}: IngredientsListProps) {
    return (
        <ul className={`${styles.list} mt-6 pr-4 pl-4`}>
            {ingredients.map((cardInfo, index) => {
                return <IngredientsItem cardInfo={cardInfo} key={index}/>
            })}
        </ul>
    )
}

export default IngredientsList 
