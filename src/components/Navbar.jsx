import { logo } from "../assets/icons";


const Navbar = () => {
  return (
    <>
      <div>
        {/* mobile navigation */}
        <header id="navigation" className="mygradient w-full ss:hidden ">
          <nav className="text-gray-500 w-full  px-6 py-2 flex flex-wrap  justify-between">
            <img className="w-1/3 cursor-pointer" src={logo} alt="hoo bank" />

            <button
              onClick={open}
              id="buttonopenmenu"
              className=" w-[25px] my-auto hover:bg-cyan-100 hover:text-black rounded-md cursor-pointer text-white  text-center h-[29px]"
            >
              &#9776;
            </button>
          </nav>

          {/* mobile popup navigation */}
          <header
            id="popup"
            className=" hidden ss:hidden absolute top-0 left-0 h-full
          w-screen  bg-opacity-100 mygradient sidebar z-40   "
          >
            <nav className="text-dimWhite px-6 py-2 flex flex-wrap justify-between  min-h-full ">
              <button
                onClick={close}
                id="buttonclosemenu"
                className=" hover:bg-cyan-100 hover:text-black rounded-md p-2 cursor-pointer absolute right-8 top-9 mr-6"
              >
                &#x2715;{" "}
              </button>

              <br />
              <div className="w-full mt-32">
                <ul className="flex flex-wrap flex-col mx-auto">
                  <img
                    className="w-[200px] mx-auto my-4 cursor-pointer"
                    src={logo}
                    alt="hoo bank"
                  />

                  <li className="p-4 my-2 mx-auto font-bold text-2xl cursor-pointer hover:text-white">
                    <a href="#">Home</a>
                  </li>
                  <li className="p-4 my-2 mx-auto font-bold text-2xl cursor-pointer hover:text-white">
                    <a href="#bottomlinks"></a>About Us
                  </li>
                  <li className="p-4 my-2 mx-auto font-bold text-2xl cursor-pointer hover:text-white">
                    <a href="#"></a>Features
                  </li>
                  <li className="p-4 my-2 mx-auto font-bold text-2xl cursor-pointer hover:text-white">
                    <a href="#"></a>Solution
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </header>

        {/* web navigation */}
        <header className=" mygradient w-full fixed z-10 hidden ss:flex top-0 justify-center">
          <nav className="ss:w-full sm:max-w-5xl flex-wrap flex p-2 justify-between">
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
