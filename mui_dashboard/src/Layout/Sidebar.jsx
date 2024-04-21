import { Button, List } from "@mui/material";
import { RxDashboard } from "react-icons/rx";
import { CgFileDocument } from "react-icons/cg";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { BsBrowserChrome } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

export const Navigation = () => {
  const NavItems = [
    {
      name: "Home",
      path: "/",
      icon: <RiComputerLine />,
    },
    {
      name: "Dashboard",
      path: "/clients",
      icon: <RxDashboard />,
    },
    {
      name: "Browser",
      path: "/browse",
      icon: <BsBrowserChrome />,
    },
    {
      name: "About",
      path: "/about",
      icon: <AiOutlineTeam />,
    },
    {
      name: "Documentation",
      path: "/docs",
      icon: <CgFileDocument />,
    },
  ];

  return (
    <List className="flex flex-col gap-1">
      {NavItems.map((item, index) => (
        <NavLink id="nav" activeClassName="active" key={index} to={item.path}>
          <button className="flex w-full p-2 gap-2 items-center focus:border-r-4 hover:bg-blue-300/30 focus:bg-blue-300/20 focus:border-blue-500 ">
            <span className="relative left-2  p-2 rounded-lg text-blue-500 hover:text-black hover:bg-blue-400/70">
              {item.icon}
            </span>
            <h1 className="text-sm relative left-4 ">{item.name}</h1>
          </button>
        </NavLink>
      ))}
    </List>
  );
};

const Sidebar = () => {
  return (
    <div className={`w-full h-full bg-bkg text-txt `} >
      <span className="w-full flex justify-center items-center h-10">LOGO</span>
      <div className="w-full">
        <Navigation />
      </div>
    </div>
  );
};

export default Sidebar;
