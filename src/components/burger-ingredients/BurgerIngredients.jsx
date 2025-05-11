import React from 'react'
import Tabs from '../../UI/tabs/Tabs'
import styles from './BurgerIngredients.module.css'
import IngredientsList from '../ingredients-list/IngredientsList'
import {PropTypes} from 'prop-types'
import { dataTypes } from '../../utils/data-types'

function BurgerIngredients ({data}) {

    const bun = data.filter(item => item.type === 'bun')
    const sauce = data.filter(item => item.type === 'sauce')
    const main = data.filter(item => item.type === 'main')

    return (

        <section className={styles.section}>
            <h2 className={`${styles.title} text text_type_main-large`}>Соберите Бургер</h2>
            <Tabs/>
            <div className={`${styles.ingredients} custom-scrollbar`}>
                <IngredientsList title='Булки' data={bun}/>
                <IngredientsList title='Соусы' data={sauce}/>
                <IngredientsList title='Начинки' data={main}/>
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(dataTypes).isRequired
}

export default BurgerIngredients

