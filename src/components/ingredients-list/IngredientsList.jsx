import React from 'react'
import styles from './IngredientsList.module.css'
import IngredientsItem from '../ingredients-item/IngredientsItem'

function IngredientsList ({title, ingredients}) {
    return (
        <div>
            <h2 className="text text_type_main-medium">{title}</h2>
            <ul className={`${styles.list} mt-6 pr-4 pl-4`}>
                {ingredients.map((cardInfo, index) => {
                    return <IngredientsItem cardInfo={cardInfo} key={index}/>
                })}
            </ul>
        </div>
    )
}

export default IngredientsList 
