import React from "react";
import LoadingScreen from "@/components/LoadingScreen";
// import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // const router = useRouter();


  // STATE FOR SHOWING PRELOADER
//   const [loading, setLoading] = useState(false);
  
// useEffect(() => {
//   const handleStart = (url) => {
//     url !== router.pathname ? setLoading(true) : setLoading(false);
//   };
//   const handleComplete = (url) => setLoading(false);

//   router.events.on("routeChangeStart", handleStart);
//   router.events.on("routeChangeComplete", handleComplete);
//   router.events.on("routeChangeError", handleComplete);
// }, [router]);


  return (
    <>
      <LoadingScreen />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
