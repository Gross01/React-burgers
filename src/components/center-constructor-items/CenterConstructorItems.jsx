import styles from './CenterConstructorItems.module.css'
import {DragIcon, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import {useDispatch} from 'react-redux'
import {removeIngredient} from '../../services/constructor-items/slice'

export function CenterConstructorItems ({constructorItems}) {

    const dispatch = useDispatch()

    const removeItem = (id) => {
        dispatch(removeIngredient(id))
    }

    return (
        <div className={`${styles.centerElements} custom-scrollbar`}>
            {constructorItems.map((item) => {

                if (item.bun) {
                    return undefined
                }

                return (
                    <div className={`${styles.item} pr-2`} key={item.id} id={item.id}>
                        <button className={styles.drag}><DragIcon type="primary" /></button>
                        <ConstructorElement
                          text={item.name}
                          price={item.price}
                          thumbnail={item.image}
                          handleClose={() => removeItem(item.id)}
                        />
                    </div>
                  )
               })}
        </div>
    )
}