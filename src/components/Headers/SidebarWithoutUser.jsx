import { Avatar, Button, MenuItem, Progress } from "@material-tailwind/react";
import userImg from "../../assets/images/user.png";
import React, { useContext } from "react";
import { SidebarButtons } from "./SidebarButtons";
import { AuthContext } from "../../store/ContextAuth";

function SidebarWithoutUser() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <MenuItem className="flex items-center gap-2 flex-col max-w-full hover:bg-white bg-white text-black">
        <div className="flex items-center justify-start w-full my-2">

          </div>
        <div className="w-full">
          <SidebarButtons />
        </div>
        <Button className="bg-secondary w-full text-md">
            Login
        </Button>
      </MenuItem>
    </>
  );
}

export default SidebarWithoutUser;
