import { google,apple,card,bill } from "../assets/icons"

const Billing = () => {
  return (
    <div
      id="maincontainer "
      className="w-[90%] mx-auto mt-10 ss:w-full sm:max-w-4xl  ss:flex ss:flex-wrap p-2 text-center"
     
    >
      <div
        className=" relative w-full ss:w-[50%] my-10"

      >
        {" "}
        {/* gradient */}
        {/* <div className="shade absolute bottom-0 shadow__gradient h-[50%] w-[50%] "></div> */}
        <img
          className="w-[60%] mx-auto"
          src={bill}
          alt="card-deals"
        />
      </div>

      <div
        className="offers text-center m-2 ss:mx-auto w-full ss:w-[50%]"
       
      >
        <h1 className="text-gray-100 font-bold text-3xl ss:text-4xl m-2 w-[90%] mx-auto">
          Easily control your billing & invoicing.
        </h1>
        <p className="text-gray-400 font-light text-xs w-[85%] my-5 mx-auto text-justify">
          We provide minimal banking services so that you can make track of any
          payment at any instance of time with full access control over
          datasets, providing super secure network of billing systems around the
          globe.
        </p>
        <img className="inline w-[20%] m-4 cursor-pointer" src={google} alt="playstore" />
        <img className="inline w-[20%] m-4 cursor-pointer " src={apple} alt="applestore" />
      </div>
    </div>
  );
};

export default Billing