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
          md:justify-evenly
          w-screen
          py-2
          gap-1
          md:py-6          
          text-lg 
          bg-gray-100`}
      >
        <div className="flex w-64 justify-center">
          <Logo />
        </div>

        <div className="flex flex-wrap justify-center items-center py-4 sm:py-0">
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
