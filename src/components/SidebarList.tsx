import { Link } from "react-router-dom";
import { LiProps } from "../types";

const SidebarList = ({ url, text, location, Icon }: LiProps) => {
  return (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "rgba(0,115,255,0.1)"
          : "white",
      }}
    >
      <Link
        to={url}
        className={`flex items-center p-2 rounded-lg w-full ${
          location.pathname.includes(url)
            ? "text-green-500"
            : "text-white hover:text-green-500"
        }`}
      >
        <div className="flex items-center justify-center w-12 h-12 lg:w-auto lg:h-auto">
          <Icon />
        </div>

        <span className="ml-3 lg:ml-2 hidden lg:inline">{text}</span>
      </Link>
    </li>
  );
};

export default SidebarList;
