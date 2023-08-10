import { people01,people02,people03,quotes} from "../assets/icons";

const Testimonial = () => {
    return (
      <div className="w-[90%] mx-auto mt-10 ss:w-full sm:max-w-4xl  ss:flex ss:flex-wrap p-2 text-center">
        <div
          className="text-center m-2 ss:mx-auto justify-between flex flex-wrap"
         
        >
          <h1
            className="text-gray-100 font-bold text-3xl ss:text-4xl m-2 ss:w-[45%] p-3"
            
          >
            What people are saying about us
          </h1>
          <p
            className="mx-auto text-base text-gray-400 w-[90%] text-justify ss:w-[40%] my-3 self-center"
            
          >
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
          <div className="mx-auto">
            <div
              className="w-[250px]  h-[200px] p-3 my-6 mx-auto hovergradient rounded-lg "
             
            >
              <img className="w-[25px]" src={quotes} alt="quote" />
              <p className="text-gray-100 text-base p-1 m-2">
                Money is only a tool. It will take you wherever you wish, but it
                will not replace you as the driver.
              </p>
              <div className="flex ">
                <img className="w-[35px] mx-4" src={people01} alt="image" />
                <span className="text-gray-100 text-sm">
                  Janny John
                  <br />
                  <span className="text-gray-500 text-xs ml-2">
                    Founder & Leader
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div
              className="w-[250px] h-[200px] p-3 my-6 mx-auto hovergradient rounded-lg "
             
            >
              <img className="w-[25px]" src={quotes} alt="quote" />
              <p className="text-gray-100 text-base p-1 m-2">
                It is usually people in the money business, finance and
                international trade that are really rich.
              </p>
              <div className="flex ">
                <img className="w-[35px] mx-4" src={people03} alt="image" />
                <span className="text-gray-100 text-sm">
                  Robert Dw.jr
                  <br />
                  <span className="text-gray-500 text-xs ml-2">
                    Founder & Leader
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div
              className="w-[250px]  h-[200px] p-3 my-6 mx-auto hovergradient rounded-lg "
             
            >
              <img className="w-[25px]" src={quotes} alt="quote" />
              <p className="text-gray-100 text-base p-1 m-2">
                Money make your life easier. If you are lucky to have it, you're
                lucky.
              </p>
              <div className="flex mt-7">
                <img className="w-[35px] mx-4" src={people02} alt="image" />
                <span className="text-gray-100 text-sm">
                  chris Evans
                  <br />
                  <span className="text-gray-500 text-xs ml-2">
                    Founder & Leader
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};


export default Testimonial;
