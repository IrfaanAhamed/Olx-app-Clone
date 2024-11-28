import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="shadow-md bg-primary h-20 flex items-center">
      <Link to={"/"}>
        <IoMdArrowBack className="text-2xl ml-6" />
      </Link>
    </div>
  );
}

export default Header;
