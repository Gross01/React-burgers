import {PropTypes} from 'prop-types'
import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";
import ConstructorItem from "../constructor-item/ConstructorItem";

const Protected = ({onlyUnAuth = false, component}) => {
    const isAuthChecked = useSelector(state => state.userInfo.isAuthCheked);
    const user = useSelector(state => state.userInfo.user);
    const location = useLocation();

    if (!isAuthChecked) {
        return <p>Loading...</p>;
    }

    if (!onlyUnAuth && !user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    if (onlyUnAuth && user) {
        const { from } = location.state ?? { from: '/' };
        return <Navigate to={from} />;
    }

    return component;
}

ConstructorItem.propTypes = {
    component: PropTypes.func
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({component}) => <Protected onlyUnAuth={true} component={component} />