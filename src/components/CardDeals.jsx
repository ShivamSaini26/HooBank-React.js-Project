import { card } from "../assets/icons";

const Billing = () => {
  return (
    <div
      id="maincontainer "
      className="w-[90%] mx-auto mt-10 ss:w-full sm:max-w-4xl  ss:flex ss:flex-wrap p-2 text-center"
      
    >
      {" "}
      {/* gradient */}
      <div className="shade absolute right-0 shadow__gradient h-[60%] w-[30%] rounded-full"></div>
      <div
        className="offers text-center m-2 ss:mx-auto w-full ss:w-[50%] self-center"
      
      >
        <h1 className="text-gray-100 font-bold text-3xl ss:text-4xl m-2 w-[90%] mx-auto p-3">
          Find a better card deal in few easy steps.
        </h1>
        <p className="text-gray-400 font-light text-xs w-[75%] my-6 mx-auto text-justify">
          We provide variety of cards in each categories. Our cards ensures
          users to get huge discount during shopping. Are you ready for the
          offers?
        </p>
        <div className="flex">
          <button className="bg-blue-gradient text-black text-xs  rounded-md font-bold my-5 mx-14 p-2 px-5 hover:text-white ">
            Get Started
          </button>
        </div>
      </div>
      <div
        className=" relative w-full ss:w-[50%] my-10"
        
      >
        {" "}
        <img
          className="w-[70%] mx-auto self-stretch"
          src={card}
          alt="card-deals"
        />
      </div>
    </div>
  );
};

export default Billing;
