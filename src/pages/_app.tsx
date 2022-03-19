import "../../styles/globals.css";
import Footer from "../components/site/Footer";
import HeadPage from "../components/site/HeadPage";
import MiniNavBar from "../components/site/MiniNavBar";
import NavBar from "../components/site/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadPage />
      <div className="flex flex-col items-center min-h-screen">
        <div className="flex flex-col flex-grow w-full">
        <MiniNavBar />
        <NavBar />
        <Component {...pageProps} />

        </div>
      <Footer />
      </div>

    </>
  );
}

export default MyApp;

// tutorial de layout persistente
// https://dev.to/guiselair/criando-um-layout-persistente-em-nextjs-1g8m
