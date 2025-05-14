import React from 'react'
import styles from './BurgerConstructor.module.css'
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientsTypes } from '../../utils/ingridients-types'
import PropTypes from 'prop-types'

function BurgerConstructor ({ingredients}) {

    const burgerComponents = [
        "60666c42cc7b410027a1a9b1",
        "60666c42cc7b410027a1a9b9",
        "60666c42cc7b410027a1a9b4",
        "60666c42cc7b410027a1a9bc",
        "60666c42cc7b410027a1a9bb",
        "60666c42cc7b410027a1a9bb",
        "60666c42cc7b410027a1a9b3",
        "60666c42cc7b410027a1a9be",
    ]

    const firstItem = ingredients.find(item => item['_id'] === burgerComponents[0])

    const priceSum = burgerComponents.reduce((sum, component, index) => {
      const findItem = ingredients.find(item => item['_id'] === component)
      if (index === 0) {
        return sum += (findItem.price * 2)
      }
      return sum += findItem.price
    }, 0)

    return (
        <section className={`${styles.section} p-4 pt-25`}>
            <div className={`${styles.firstElement} pl-8`}>
              <ConstructorElement
                type='top'
                isLocked='true'
                text={`${firstItem.name} (верх)`}
                price={firstItem.price}
                thumbnail={firstItem.image}
              />
            </div>
            <div className={`${styles.centerElements} custom-scrollbar`}>
               {burgerComponents.map((comp, index) => {

                if (index === 0) {
                  return undefined
                }

                const currentElement = ingredients.find(item => item['_id'] === comp)

                 return (
                    <div className={`${styles.item} pr-2`} key={index}>
                      <button className={styles.drag}><DragIcon type="primary" /></button>
                      <ConstructorElement
                        text={currentElement.name}
                        price={currentElement.price}
                        thumbnail={currentElement.image}
                      />
                    </div>
                 )
               })}
            </div>
            <div className={`${styles.lastElement} pl-8`}>
              <ConstructorElement
                type='bottom'
                isLocked='true'
                text={`${firstItem.name} (низ)`}
                price={firstItem.price}
                thumbnail={firstItem.image}
              />
            </div>
            <div className={`${styles.priceDiv} mt-10`}>
              <span className={`${styles.priceSpan} text text_type_main-medium`}>{priceSum} <CurrencyIcon/></span>
              <Button htmlType="button" type="primary" size="medium">
                Оформить заказ
              </Button>
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientsTypes).isRequired
}
export default BurgerConstructor