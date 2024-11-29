import { Typography } from "@material-tailwind/react";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="shadow-md bg-primary h-[68px] flex items-center">
      <Link to={"/"}>
        <IoMdArrowBack className="text-2xl ml-6" />
      </Link>
      <Typography className="text-xl ml-4 font-body">Post your Ad</Typography>
    </div>
  );
}

export default Header;
