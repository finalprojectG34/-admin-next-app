import {useRouter} from "next/router";
import {useEffect} from "react";
import useLocalStorage from "../src/hooks/useLocalStorage";

const RootApp = () => {
  const router = useRouter();
  const [data] = useLocalStorage("store", null);

  useEffect(() => {
    if (data) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, [])

  return <></>;
};

export default function Home() {
  return (
    <div>
      <RootApp/>
    </div>
  )
}