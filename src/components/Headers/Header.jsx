import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
  Input
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import Logo from "./Logo";
import { FaPlus } from "react-icons/fa";

function Header() {
  const [openLocation, setOpenLocation] = React.useState(false);
  const [openLang, setOpenLang] = React.useState(false);
  return (
    <div className=" w-full sm:h-[68px] h-[136px] flex flex-col sm:flex-row  bg-slate-100 border border-b-4 border-white px-3 py-2">
      <div className="flex items-center basis-1/4 sm:justify-start justify-between">
        <Logo />
        <Menu open={openLocation} handler={setOpenLocation}>
          <MenuHandler
            className="sm:bg-white text-secondary flex items-center sm:w-full justify-between px-2 h-full py-0 ml-3
            rounded-sm focus:border-2 focus:border-cyan-400 relative sm:border-2 border-0 shadow-none bg-transparent 
          sm:border-secondary"
          >
            <Button className="flex items-center  gap-2 bg-white text-gray-700">
              <IoSearchOutline className="w-5 h-5 sm:block hidden" />
              <CiLocationOn className="w-5 h-5 block sm:hidden" />
              <Typography className="">India</Typography>
              <IoIosArrowDown
                className={`h-6 w-6 transition-transform sm:block hidden ${
                  openLocation ? "rotate-180" : ""
                }`}
              />
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className="basis-[40%] sm:mx-2 flex relative items-center ">
        <Input
          placeholder="Find Cars, Mobile Phones and more"
          className=" !h-[45px]  !border-secondary !border-2 rounded-sm rounded-r-none mt-[1px] sm:mt-0 placeholder:text-blue-gray-500 placeholder:opacity-100
            focus:!border-cyan-400 absolute -top-[3px] "
          labelProps={{
            className: "before:content-none after:content-none relative"
          }}
        />
        <IoSearchOutline className="text-white h-[45px] w-[45px] p-2  bg-secondary rounded-sm rounded-l-none" />
      </div>
      <div className="basis-[35%] hidden sm:flex sm:items-center sm:justify-around">
        <Menu open={openLang} handler={setOpenLang}>
          <MenuHandler
            className="text-secondary flex items-center px-1 py-1 ml-2
            shadow-none bg-transparent
          sm:border-secondary"
          >
            <Button className="flex items-center">
              <Typography className="font-bold">English</Typography>
              <IoIosArrowDown
                className={`h-6 w-6 ml-1 transition-transform sm:block hidden ${
                  openLang ? "rotate-180" : ""
                }`}
              />
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>English</MenuItem>
          </MenuList>
        </Menu>
        <a
          href="/login"
          className="font-medium underline underline-offset-4 hover:no-underline text-lg"
        >
          Login
        </a>
        <div className="flex items-center">
          <Button className="relative text-secondary font-extrabold rounded-full bg-white p-1 sm:p-3 py-4">
            <span
              className=" cursor-pointer
              before:absolute before:inset-1 before:rounded-full
              before:border-[6px] before:border-t-yellow-400
            before:border-r-teal-400 before:border-b-blue-500 before:border-l-yellow-400"
            />

            <div className=" flex text-sm items-center hover:scale-100 space-x-1 px-3 rounded-full">
              <FaPlus className="" />
              <span className="font-extrabold text-xs hidden sm:block">
                SELL
              </span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
