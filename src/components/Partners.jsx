import { dropbox,airbnb,binance,coinbase } from "../assets/icons"
const Partners = () => {
  return (
    <>
      <div className="my-14 p-4 flex flex-wrap justify-around ss:w-full sm:max-w-4xl mx-auto">
        <div className="shade absolute left-20 shadow__gradient h1530%] w-[30%] rounded-full"></div>

        <img
          className="w-[150px] cursor-pointer m-2  "
          src={dropbox}
          alt="dropbox"
        />
        <img
          className="w-[150px] cursor-pointer m-2  "
          src={binance}
          alt="binance"
        />
        <img
          className="w-[150px] cursor-pointer m-2  "
          src={airbnb}
          alt="airbnb"
        />
        <img
          className="w-[150px] cursor-pointer m-2  "
          src={coinbase}
          alt="coinbase"
        />
      </div>

      <div className="my-14 p-7 flex flex-wrap justify-around ss:w-full sm:max-w-4xl mx-auto bg-black-gradient rounded-lg">
        <section>
          <h1 className="text-gray-100 font-bold text-3xl ss:text-4xl m-2 w-[90%] mx-auto p-3 text-center">
            Let's try our service Now!
          </h1>
          <p className="text-gray-300 font-thin text-sm text-justify">
            Everything you need to accept card payments and grow your business
            anywhere on the planet
          </p>
        </section>
        <div className="flex">
          <button className="bg-blue-gradient text-black text-sm  rounded-md font-bold my-5 mx-14 px-12 hover:text-white ">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Partners