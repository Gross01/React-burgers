import React from 'react';
import AppHeader from '../../components/app-header/AppHeader'
import BurgerIngredients from '../burger-ingredients/BurgerIngredients.jsx';
import {data} from '../../utils/data.js'
import AppStyles from './App.module.css'
import BurgerConstructor from '../burger-constructor/BurgerConstructor.jsx';

function App() {
  return (
    <div className="p-10">
      <AppHeader/>
      <main className={AppStyles.main}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
      </main>
    </div>
  );
}

export default App