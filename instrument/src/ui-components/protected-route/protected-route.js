import React, {useEffect} from "react";
import {useRouter} from "next/router";

import useLocalStorage from "../../hooks/useLocalStorage";


const ProtectedRoute = ({children}) => {
    const router = useRouter();
    const [data] = useLocalStorage("store", null);
    // const [roles] = useLocalStorage("roles", null);

    useEffect(() => {
        // const data = localStorage.getItem("store");
        if (!data) {
            router.replace('/login');
        }
        // if (roles) {
        //     if (roles.token.indexOf("ADMIN") < 0)
        //         router.replace("/access-denied")
        // }
    }, [data])

    return <>{children}</>;
};

export default ProtectedRoute;
