import { instagram, facebook, linkedin } from "../assets/icons";

const Footer = () => {
  return (
    <footer className=" mygradient w-full ss:flex justify-center">
      <nav className="ss:w-full sm:max-w-5xl flex-wrap flex justify-around">
        <div className="w-1/2 ss:w-1/3">
          <p className="text-xs p-3 text-gray-200">
            All right reserved &copy; 2023. Developed and Managed By - Shivam
            Saini
          </p>
        </div>
        <div className="ss:w-[400px]   flex flex-wrap justify-end">
          <a
            className="m-2 hover:bg-blue-800 p-[2px] rounded-sm self-center"
            href="https://www.linkedin.com/in/shivamsaini26" target="__blank"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            className="m-2 hover:bg-red-500 p-[2px] rounded-sm self-center"
            href="#"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            className="m-2 hover:bg-blue-600 p-[2px] rounded-full self-center"
            href="#"
          >
            <img src={facebook} alt="facebook" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
