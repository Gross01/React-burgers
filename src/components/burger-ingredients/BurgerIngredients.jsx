import React from 'react'
import Tabs from '../../UI/tabs/Tabs'
import styles from './BurgerIngredients.module.css'
import IngredientsList from '../ingredients-list/IngredientsList'
import {PropTypes} from 'prop-types'
import { ingredientsTypes } from '../../utils/ingridients-types'

function BurgerIngredients ({ingredients}) {

    console.log(ingredients)

    const bun = ingredients.filter(item => item.type === 'bun')
    const sauce = ingredients.filter(item => item.type === 'sauce')
    const main = ingredients.filter(item => item.type === 'main')

    return ( 
        <section className={styles.section}>
            <h2 className={`${styles.title} text text_type_main-large`}>Соберите Бургер</h2>
            <Tabs/>
            <div className={`${styles.ingredients} custom-scrollbar`}>
                <IngredientsList title='Булки' ingredients={bun}/>
                <IngredientsList title='Соусы' ingredients={sauce}/>
                <IngredientsList title='Начинки' ingredients={main}/>
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientsTypes).isRequired
}

export default BurgerIngredients

