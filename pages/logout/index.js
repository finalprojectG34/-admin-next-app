import React, { useEffect } from "react";
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.clear();
    router.push('/');
  }, []);

  return <></>;
};

export default Logout;
