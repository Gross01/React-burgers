import {useRef, useState} from 'react'
import Tabs from '../../UI/tabs/Tabs'
import styles from './BurgerIngredients.module.css'
import IngredientsList from '../ingredients-list/IngredientsList'
import {useSelector} from 'react-redux'
import {selectBun, selectSauce, selectMain} from '../../services/ingredients/selectors'

function BurgerIngredients () {
    const loading = useSelector(store => store.ingredients.loading)
    const error = useSelector(store => store.ingredients.error)
    const bun = useSelector(selectBun)
    const sauce = useSelector(selectSauce)
    const main = useSelector(selectMain)

    const tabsRef = useRef()
    const bunRef = useRef()
    const sauceRef = useRef()
    const mainRef = useRef()

    const [currentTab, setCurrentTab] = useState('bun')

    const onScroll = () => {
        if ((bunRef.current.getBoundingClientRect().top - 100) <= tabsRef.current.getBoundingClientRect().bottom) {
            setCurrentTab('bun')
        }

        if ((sauceRef.current.getBoundingClientRect().top - 100) <= tabsRef.current.getBoundingClientRect().bottom) {
            setCurrentTab('sauce')
        }

        if ((mainRef.current.getBoundingClientRect().top - 100) <= tabsRef.current.getBoundingClientRect().bottom) {
            setCurrentTab('main')
        }
    }

    const tabsHandler = (e) => {
        if (e === 'bun') {
            bunRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        if (e === 'sauce') {
            sauceRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        if (e === 'main') {
            mainRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
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
                <div ref={tabsRef}>
                    <Tabs current={currentTab} tabsHandler={tabsHandler}/>
                </div>
                <div className={`${styles.ingredients} custom-scrollbar`} onScroll={onScroll}>
                    <div>
                        <h2 className="text text_type_main-medium" ref={bunRef}>Булки</h2>
                        <IngredientsList ingredients={bun}/>
                    </div>
                    <div>
                        <h2 className="text text_type_main-medium" ref={sauceRef}>Соусы</h2>
                        <IngredientsList ingredients={sauce}/>
                    </div>
                    <div>
                        <h2 className="text text_type_main-medium" ref={mainRef}>Начинки</h2>
                        <IngredientsList ingredients={main}/>
                    </div>
                </div>
            </section>
    )
}

export default BurgerIngredients

