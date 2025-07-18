import {useSelector} from "../../services/store";
import {Navigate, useLocation} from "react-router-dom";
import React from "react";

type ProtectedProps = {
    onlyUnAuth?: boolean,
    component: React.JSX.Element
}

const Protected = ({onlyUnAuth = false, component}: ProtectedProps): React.JSX.Element => {
    const isAuthChecked = useSelector(state => state.userInfo.isAuthChecked);
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

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({component}: Pick<ProtectedProps, 'component'>) => <Protected onlyUnAuth={true} component={component} />