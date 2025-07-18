import AppHeader from '../app-header/AppHeader'
import styles from './App.module.css'
import Home from "../../pages/Home";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import ForgotPassword from "../../pages/forgot-password/ForgotPassword";
import ResetPassword from "../../pages/reset-password/ResetPassword";
import Profile from "../../pages/profile/Profile";
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";
import React, {useEffect} from "react";
import {useSelector, useDispatch} from '../../services/store'
import {getIngredients} from "../../services/ingredients/thunk";
import {checkUserAuth} from "../../services/user-info/thunk";
import {OnlyAuth, OnlyUnAuth} from "../protected-road/Protected";
import ChangeUserInfo from "../change-user-info/ChangeUserInfo";
import OrdersHistory from "../orders-history/OrdersHistory";
import OrdersFeed from "../../pages/orders-feed/OrdersFeed";
import NotFound404 from "../../pages/not-found-404/NotFound404";

function App(): React.JSX.Element {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ingredients = useSelector(state => state.ingredients.items?.data);

    useEffect(() => {
        dispatch(getIngredients())
        dispatch(checkUserAuth())
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
                          <Route path="/login" element={<OnlyUnAuth component={<Login />} />}/>
                          <Route path="/register" element={<OnlyUnAuth component={<Register />} />}/>
                          <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassword />} />}/>
                          <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPassword />} />}/>
                          <Route path="/profile" element={<OnlyAuth component={<Profile />} />}>
                              <Route index element={<ChangeUserInfo />}/>
                              <Route path='orders' element={<OrdersHistory />}/>
                          </Route>
                          <Route path="/*" element={<NotFound404 />}/>
                          <Route path="/feed" element={<OrdersFeed />}/>
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