import React, {useEffect} from "react";
import {useRouter} from 'next/router';
import fbConfig from "../../src/firebase/fb-config";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.clear();

    fbConfig.signOut(fbConfig.auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
    router.push('/');
  }, []);

  return <></>;
};

export default Logout;
