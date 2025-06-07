import AppHeader from '../../components/app-header/AppHeader'
import styles from './App.module.css'
import Home from "../../pages/Home";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import ForgotPassword from "../../pages/forgot-password/ForgotPassword";
import ResetPassword from "../../pages/reset-password/ResetPassword";
import NotFound404 from "../../pages/not-found-404/NotFound404";
import Profile from "../../pages/profile/Profile";
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/ingredients/thunk";

function App() {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ingredients = useSelector(state => state.ingredients.items.data);

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch])

    const background = location.state?.background

    return (
        <div className="p-10">
            <AppHeader/>
            <main className={styles.main}>
                    {ingredients &&
                    <Routes location={background || location}>
                          <Route path="/" element={<Home />}/>
                          <Route path='ingredients/:id' element={<IngredientDetails/>}/>
                          <Route path="/login" element={<Login />}/>
                          <Route path="/register" element={<Register />}/>
                          <Route path="/forgot-password" element={<ForgotPassword />}/>
                          <Route path="/reset-password" element={<ResetPassword />}/>
                          <Route path="/profile" element={<Profile />}/>
                          <Route path="/*" element={<NotFound404 />}/>
                    </Routes>}

                    {background &&
                      ingredients &&
                    <Routes>
                          <Route path="/ingredients/:id" element={<Modal modalHandler={() => navigate('/')}><IngredientDetails/></Modal>}/>
                    </Routes>}
            </main>
        </div>
  );
}

export default App