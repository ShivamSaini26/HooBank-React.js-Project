import { shield, star, send } from "../assets/icons";
const Business = () => {
  return (
    <div
      id="maincontainer "
      className="w-[90%] mx-auto my-10 ss:w-full sm:max-w-4xl  ss:flex ss:flex-wrap p-2 text-center "
    >
      {/* gradient box */}
      <div className="shade absolute left-0 shadow__gradient h-[60%] w-[30%] rounded-full"></div>
      <div className="w-full ss:w-[50%] ss:h-[90%] ss:self-center">
        <h1 className="text-gray-100 font-bold text-3xl ss:text-4xl m-4 ">
          You do the Business,
          <br /> We'll handle the Money.
        </h1>
        <p className="text-gray-400 font-light text-xs  w-[75%] m-4 mx-auto text-justify">
          With the right credit card,you can improve your financial life by
          building credit, earing rewards and saving money. But with hundreds of
          credit cards on the market
        </p>
        <div>
          <button className="bg-blue-gradient text-black text-xs p-2 px-5  rounded-md font-bold my-5 hover:text-white">
            Get Started
          </button>
        </div>
      </div>
      {/*   , */}

      <div id="features-section" className="w-[90%] ss:w-[50%]">
        <div className="rewards m-4 ss:m-3 flex flex-wrap hovergradient rounded-xl px-3 py-1 justify-between  cursor-pointer">
          <img
            className=" p-2 mx-1 h-fit w-fit rounded-lg"
            src={star}
            alt="star"
          />
          <div className="w-[85%]">
            <h1 className="text-white  text-base  font-semibold text-left  m-1">
              Rewards
            </h1>
            <p className="text-sm text-gray-400 w-full p-1 text-left  rounded-lg ">
              The best credit cards after some tantalizing combinations of
              promotions and prizes.
            </p>
          </div>
        </div>

        <div className="transfer m-4 ss:m-3 flex flex-wrap hovergradient rounded-xl px-3 py-1 justify-between  cursor-pointer">
          <img
            className=" p-2 mx-1 h-fit w-fit rounded-lg"
            src={send}
            alt="send"
          />
          <div className="w-[85%]">
            <h1 className="text-white  text-base  font-semibold text-left  m-1">
              Balance Transfer
            </h1>
            <p className="text-sm text-gray-400 w-full p-1 text-left  rounded-lg ">
              A balance transefer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
        <div className="rewards m-4 ss:m-3 flex flex-wrap hovergradient rounded-xl px-3 py-1 justify-between  cursor-pointer">
          <img
            className=" p-2 mx-1 h-fit w-fit rounded-lg"
            src={shield}
            alt="star"
          />
          <div className="w-[85%]">
            <h1 className="text-white  text-base  font-semibold text-left  m-1">
              100% Secured
            </h1>
            <p className="text-sm text-gray-400 w-full p-1 text-left  rounded-lg ">
              We take proactive steps make sure your information and
              transactions are secured.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
