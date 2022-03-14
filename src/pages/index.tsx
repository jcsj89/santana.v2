import Image from "next/image";
import Footer from "../components/site/Footer";
import HeadPage from "../components/site/HeadPage";
import NavBar from "../components/site/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <HeadPage />
      <div className="flex flex-col items-center h-screen">
        <NavBar />
        <h1 className="underline">Hello world!</h1>
      </div>
      <Footer />
    </>
  );
}
