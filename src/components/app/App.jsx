import React from 'react';
import AppHeader from '../../components/app-header/AppHeader'
import BurgerIngredients from '../burger-ingredients/BurgerIngredients.jsx';
import styles from './App.module.css'
import BurgerConstructor from '../burger-constructor/BurgerConstructor.jsx';

const URL = 'https://norma.nomoreparties.space/api/ingredients'

function App() {

  const [ingredients, setIngredients] = React.useState([])

  React.useEffect(() => {
    const getIngredients = async () => {
      try {
        const res = await fetch(URL)

        if (!res.ok) {
          throw new Error(`Ошибка ${res.status}: ${res.statusText}`)
        }

        const data = await res.json()
        setIngredients(data.data)
      } catch (e) {
        console.log(e.message)
      }
    }

    getIngredients()
  }, [])

  return (
    <div className="p-10">
      <AppHeader/>
      <main className={styles.main}>
        {ingredients.length > 0 
        ? 
          <>
            <BurgerIngredients ingredients={ingredients}/>
            <BurgerConstructor ingredients={ingredients}/>
          </>
        : <span className={`${styles.loading} mt-30 text text_type_main-medium`}>Загрузка...</span>}
      </main>
    </div>
  );
}

export default App