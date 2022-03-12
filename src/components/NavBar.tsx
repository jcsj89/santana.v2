import Logo from "./Logo";

export default function NavBar() {
  return (
    <>
      <div
        className={`flex flex-wrap
          items-center
          justify-between
          md:justify-around
          w-screen
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-blue-500`}
      >
        <Logo />

        <div className="flex flex-wrap">
          <a href="http://">home</a>
          <a href="http://">home</a>
          <a href="http://">home</a>
          <a href="http://">home</a>
          <a href="http://">home</a>
          <a href="http://">home</a>
          <a href="http://">home</a>
          <a href="http://">home</a>
        </div>
      </div>
    </>
  );
}
