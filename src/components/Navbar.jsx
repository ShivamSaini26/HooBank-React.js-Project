import { logo, menu, close } from "../assets/icons";
import "../index.css";
const Navbar = () => {
  return (
    <>
      <div>
        {/* mobile navigation */}
        <header className="mygradient w-full ss:hidden">
          <nav className="text-gray-500 w-full  px-6 py-2 flex flex-wrap  justify-between">
            <img className="w-1/3 cursor-pointer" src={logo} alt="hoo bank" />
            <img
              id="buttonopenmenu"
              className="w-[20px] cursor-pointer "
              src={menu}
              alt="menu"
            />
          </nav>
        </header>

        {/* mobile navigation popup */}
        <header
          id="popup"
          className="mygradient w-full min-h-full  sidebar z-100 relative top-0 hidden"
        >
          <nav className="text-dimWhite  px-6 py-2 flex flex-wrap justify-between  min-h-full ">
            <img
              id="buttonopenmenu"
              className="w-[25px] cursor-pointer absolute right-8 top-9"
              src={close}
              alt="menu"
            ></img>

            <br />
            <div className="w-full mt-32">
              <ul className="flex flex-wrap flex-col mx-auto">
                <img
                  className="w-[200px] mx-auto my-4 cursor-pointer"
                  src={logo}
                  alt="hoo bank"
                />

                <li className="p-4 my-2 mx-auto font-bold text-2xl">
                  <a href="#">Home</a>
                </li>
                <li className="p-4 my-2 mx-auto font-bold text-2xl">
                  <a href="#"></a>About Us
                </li>
                <li className="p-4 my-2 mx-auto font-bold text-2xl">
                  <a href="#"></a>Features
                </li>
                <li className="p-4 my-2 mx-auto font-bold text-2xl">
                  <a href="#"></a>Solution
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* web navigation */}
        <header
          className=" mygradient w-full  sticky hidden ss:flex top-0 justify-center"
          
        >
          <nav
            className="ss:w-full sm:max-w-5xl flex-wrap flex p-2 justify-between"
          
          >
            <img className="w-[110px] cursor-pointer" src={logo} alt="" />
            <ul className="flex flex-wrap ">
          
              <li className="p-1 mx-3 font-thin text-base ">
                <a
                  className="cursor-pointer text-white font- hover:text-gray-300"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="p-1 mx-3 font-thin text-base ">
                <a
                  className="cursor-pointer text-white font- hover:text-gray-300"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="p-1 mx-3 font-thin text-base ">
                <a
                  className="cursor-pointer text-white font- hover:text-gray-300"
                  href="#"
                >
                  Features
                </a>
              </li>

              <li className="p-1 mx-3  font-thin text-base ">
                <a
                  className="cursor-pointer text-white font- hover:text-gray-300"
                  href="#"
                >
                  Solutions
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
