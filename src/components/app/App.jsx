import React from 'react';
import AppHeader from '../../components/app-header/AppHeader'
import BurgerIngredients from '../burgerIngredients/BurgerIngredients';

function App() {
  return (
    <div className="App p-10">
      <AppHeader/>
      <main>
        <BurgerIngredients/>
      </main>
    </div>
  );
}

export default App