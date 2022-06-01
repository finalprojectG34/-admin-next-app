import React, {useEffect} from "react";
import {useRouter} from 'next/router';
import fbConfig from "../../src/firebase/fb-config";

const Logout = () => {
    const router = useRouter();

    useEffect(() => {
        localStorage.clear();

        fbConfig.signOut(fbConfig.auth).then(() => {
            console.log("sign out success")
        }).catch((e) => {
            console.log("sign out error", e)
        })
        router.push('/');
        console.log("logging out")
    }, []);

    return <></>;
};

export default Logout;
