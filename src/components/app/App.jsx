import AppHeader from '../../components/app-header/AppHeader'
import BurgerIngredients from '../burger-ingredients/BurgerIngredients.jsx';
import styles from './App.module.css'
import BurgerConstructor from '../burger-constructor/BurgerConstructor.jsx';
import {DndProvider} from 'react-dnd'
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {

  return (
    <div className="p-10">
      <AppHeader/>
      <main className={styles.main}>
        <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
        </DndProvider>
      </main>
    </div>
  );
}

export default App