import React, { useContext, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
  Input,
  Avatar,
  Progress
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { HeaderButtons, Logo } from "./datas";
import { FaPlus } from "react-icons/fa";
import { AuthContext } from "../../store/ContextAuth";
import { Link } from "react-router-dom";
import userImg from "../../assets/images/user.png";

function Header() {
  const { user, firebaseApp } = useContext(AuthContext);
  const [openLocation, setOpenLocation] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  return (
    <div className=" w-full sm:h-[68px] h-[136px] flex flex-col sm:flex-row  bg-primary border border-b-4 border-white px-3 py-2">
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
            focus:!border-cyan-400 absolute -top-[3px] bg-white"
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

        {user ? (
          <Menu>
            <MenuHandler>
              <Avatar
                size="sm"
                alt="avatar"
                src={userImg}
                className="border border-white shadow-md shadow-green-900/20 ring-2 ring-cyan"
              />
            </MenuHandler>
            <MenuList>
              <MenuItem className="flex items-center gap-2 flex-col max-w-72 hover:bg-white bg-white text-black">
                <div className="flex items-center justify-start w-full my-2">
                  <Avatar
                    size="lg"
                    alt="avatar"
                    src={userImg}
                    className="border mx-2 border-white shadow-xl shadow-green-900/20 ring-2 ring-cyan"
                  />
                  <h4 className="font-extrabold text-lg ml-2">
                    {user.displayName}
                  </h4>
                </div>

                <Button className="w-full text-sm font-bold hover:bg-white hover:text-black hover:outline">
                  View and edit profile
                </Button>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-sm">1 step left</h3>
                  <Progress value={80} color="amber" />

                  <p className="text-xs text-slate-500">
                    We are built on trust. Help one another to get to know each
                    other better.
                  </p>
                  <hr />
                </div>
                <div className="w-full">
                  <HeaderButtons />
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Link
            to={"/auth/login"}
            className={`font-medium underline underline-offset-4 hover:no-underline text-lg `}
          >
            Login
          </Link>
        )}

        <div className="flex items-center">
          <Link to={"/post"}>
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
