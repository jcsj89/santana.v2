import Image from "next/image";
import Footer from "../components/Footer";
import HeadPage from "../components/HeadPage";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <HeadPage />
      <div className="flex flex-col  items-center h-screen">
        <NavBar />
        <h1 className="underline">Hello world!</h1>
      </div>
      <Footer />
    </>
  );
}
