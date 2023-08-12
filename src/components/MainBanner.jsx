import { discount, robot } from "../assets/icons";


const MainBanner = () => {
  return (
    <div
      id="mainbanner"
      className=" ss:w-full sm:max-w-4xl mt-12 p-3  mx-auto flex flex-wrap flex-col ss:flex-row"
    >
      <div className="headlines m-auto w-11/12 ss:w-[52%]">
        <div
          className="heading p-2 xs:p-4"
          
        >
          <p className="text-slate-50 font-thin text-sm rounded-md text-start bg-discount-gradient w-fit px-3">
            <img className=" inline" src={discount} alt="discount" /> 20%{" "}
            <span className="text-slate-400 font-thin text-xs">
              Discount for{" "}
            </span>
            1 Month{" "}
            <span className="text-slate-400 font-thin text-sm">Account</span>
          </p>
          <br />

          <span className="font-bold text-gray-100  text-4xl">The Next</span>
          <br />
          <span className="font-bold text-gradient  text-4xl">Generation</span>
          <div className="border-[2px] rounded-full xs:mx-8 xs:my-1 inline-block  border-teal-300 h-16 w-16 text-[10px] text-white hover:text-black p-4 hover:bg-teal-300 ss:mx-5">
            Get 🡭 Started
          </div>
          <p className="font-bold text-gray-100  text-4xl">Payment Methods.</p>

          <p className="text-slate-300 font-light text-xs w-3/4 text-justify p-2 mt-2">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>

      <div className="robot relative m-auto w-11/12 ss:w-[48%]  p-2 my-2 z-[5] ">
        <img className="   mx-auto" src={robot} alt="robot-hand" />
        <div className="absolute w-[40%] h-[35%] z-[0] top-0 pink__gradient"></div>
        <div className="absolute w-[80%] h-[50%] ss:h-[70%]  z-[1] bottom-40 rounded-full white__gradient"></div>

        <div className="absolute w-[50%] h-[50%] z-[0] bottom-20 right-20 blue__gradient"></div>
      </div>
    </div>
  );
};
export default MainBanner;
