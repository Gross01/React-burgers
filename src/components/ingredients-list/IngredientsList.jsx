import styles from './IngredientsList.module.css'
import IngredientsItem from '../ingredients-item/IngredientsItem'
import PropTypes from 'prop-types'

function IngredientsList ({ingredients}) {
    return (
        <ul className={`${styles.list} mt-6 pr-4 pl-4`}>
            {ingredients.map((cardInfo, index) => {
                return <IngredientsItem cardInfo={cardInfo} key={index}/>
            })}
        </ul>
    )
}

IngredientsList.propTypes = {
    ingredients: PropTypes.array.isRequired
}

export default IngredientsList 
