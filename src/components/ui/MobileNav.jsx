import Hamburger from "./Hamburger";
import { useLocation, useNavigate } from "react-router-dom";

const MobileNav = () => {
  const navigation = useNavigate();
  const location = useLocation();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div
      className="text-white items-center md:hidden px-5 py-[15px]
     border-b-[1px] border-b-white flex justify-between"
    >
      <div
        className="text-[30px] tracking-[5px] font-pacifico"
        onClick={() => navigation("/")}
      >
        ESSA
      </div>

      <div className="text-white">
        <Hamburger />
      </div>
    </div>
  );
};

export default MobileNav;
