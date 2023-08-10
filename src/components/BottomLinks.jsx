import { logo } from "../assets/icons";

const BottomLinks = () => {
    return (
      <div
        className=" mx-auto mt-10 ss:w-full sm:max-w-4xl  ss:flex ss:flex-wrap p-2 text-center justify-around items-center  rounded-lg"
      
      >
        <div className="w-[90%] ss:w-1/3   p-4 m-4 inline-block  h-fit ">
          <img className="w-[150px] my-5 mx-auto cursor-pointer" src={logo} alt="hoobank" />
          <span className="text-sm text-gray-400 ">
            A new way to make payments easy, reliable and secure.
          </span>
        </div>
        <div className="w-[150px]   p-4 m-4 inline-block  h-fit ">
          <h1 className="font-bold text-lg text-gray-200 m-3">Useful links</h1>
          <span className="text-sm font-thin text-gray-400 hover:text-teal-400 cursor-pointer block mx-2">
            Content
          </span>
          <span className="text-sm font-thin text-gray-400 hover:text-teal-400 cursor-pointer block">
            How it Works
          </span>
          <span className="text-sm font-thin text-gray-400 hover:text-teal-400 cursor-pointer bloc">
            Create
          </span>
          <span className="text-sm font-thin text-gray-400 hover:text-teal-400 cursor-pointer block ">
            Explore
          </span>
          <span className="text-sm font-thin text-gray-400 hover:text-teal-400 cursor-pointer block">
            Terms & Services
          </span>
        </div>
        <div className="w-[150px]   p-4 m-4 inline-block  h-fit ">
          <h1 className="font-bold text-lg text-gray-200 m-3">Community</h1>
          <span className="text-sm font-thin text-gray-400 hover:text-teal-400 cursor-pointer block">
            Help Center
          </span>
          <span className="text-sm font-thin text-gray-400 hover:text-teal-400 cursor-pointer bloc">
            Partners
          </span>
          <span className="text-sm font-thin text-gray-400 hover:text-teal-400 cursor-pointer block ">
            Suggestions
          </span>
          <span className="text-sm font-thin text-gray-400 hover:text-teal-400 cursor-pointer block ">
            Blog
          </span>
          <span className="text-sm font-thin text-gray-400 hover:text-teal-400 cursor-pointer block ">
            News Letters
          </span>
        </div>
        <div className="w-[150px]   p-4 m-4 inline-block  h-fit ">
          <h1 className="font-bold text-lg text-gray-200 m-3 ">Partners</h1>
          <span className="text-sm font-thin text-gray-400 hover:text-teal-400 cursor-pointer block">
            Our Partner
          </span>
          <span className="text-sm font-thin text-gray-400 hover:text-teal-400 cursor-pointer block">
            Become a Partner
          </span>
        </div>
      </div>
    );
};

export default BottomLinks;
