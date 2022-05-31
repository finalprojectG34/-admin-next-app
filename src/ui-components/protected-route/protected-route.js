import React from "react";
import {Redirect, Route} from "react-router-dom";

import useLocalStorage from "../../hooks/useLocalStorage";

const ProtectedRoute = ({
                            children,
                            path,
                            ...rest
                        }) => {
    const [data] = useLocalStorage("store", null);
    const [roles] = useLocalStorage("roles", null);
    if (!data) {
        return <Redirect to="/signin"/>;
    }
    if (roles) {
        if (roles.token.indexOf("OWNER") < 0)
            return <Redirect to="/access-denied"/>;
    }
    return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
