import {useEffect} from 'react'
import Tabs from '../../UI/tabs/Tabs'
import styles from './BurgerIngredients.module.css'
import IngredientsList from '../ingredients-list/IngredientsList'
import {useDispatch, useSelector} from 'react-redux'
import {getIngredients} from '../../services/ingredients/thunk'
import {selectBun, selectSauce, selectMain} from '../../services/ingredients/selectors'

function BurgerIngredients () {
    const dispatch = useDispatch()
    const loading = useSelector(store => store.ingredients.loading)
    const error = useSelector(store => store.ingredients.error)
    const bun = useSelector(selectBun)
    const sauce = useSelector(selectSauce)
    const main = useSelector(selectMain)

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch])
    
    const statusTextClass = `${styles.statusText} text text_type_main-medium`

    if (loading) {
        return <p className={statusTextClass}>Загрузка...</p>
    }

    if (error) {
        console.log(error)
        return <p className={statusTextClass}>Ошибка загрузки, попрубуйте перезагрузить страницу</p>
    }
    
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

export default BurgerIngredients

