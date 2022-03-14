import Logo from "../UI/Logo";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <>
      <div
        className={`
          flex 
          flex-wrap
          items-center
          justify-center
          md:justify-around
          w-screen
          py-2
          md:py-0          
          text-lg text-zinc-800
          bg-gray-100`}
      >
        <Logo />

        <div className="flex flex-wrap justify-center items-center">
          <NavBarItem link="/" name="Home" />
          <NavBarItem link="/produtos" name="Produtos" />
          <NavBarItem link="/sobre" name="Sobre" />
          <NavBarItem link="/contato" name="Contato" />
          <NavBarItem link="/login" name="Login" />
        </div>
      </div>
    </>
  );
}
