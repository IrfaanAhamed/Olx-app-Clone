import { Avatar, Button, MenuItem, Progress } from "@material-tailwind/react";
import userImg from "../../assets/images/user.png";
import React, { useContext } from "react";
import { SidebarButtons} from "./SidebarButtons";
import { AuthContext } from "../../store/ContextAuth";

function SidebarMenuList() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <MenuItem className="flex items-center gap-2 flex-col max-w-full bg-white h-screen hover:bg-white  text-black">
        <div className="flex items-center justify-start w-full my-2">
          <Avatar
            size="lg"
            alt="avatar"
            src={userImg}
            className="border mx-2 border-white shadow-xl shadow-green-900/20 ring-4 ring-secondary/30"
          />
          <h4 className="font-extrabold text-lg ml-2">
            {user?.displayName}
          </h4>
        </div>

        <Button className="w-full text-sm font-bold hover:bg-white hover:text-black hover:outline">
          View and edit profile
        </Button>
        <div className="space-y-2">
          <h3 className="font-extrabold text-sm">1 step left</h3>
          <Progress value={80} color="amber" />

          <p className="text-xs text-slate-500">
            We are built on trust. Help one another to get to know each other
            better.
          </p>
          <hr />
        </div>
        <div className="w-full">
          <SidebarButtons />
        </div>
      </MenuItem>
    </>
  );
}

export default SidebarMenuList;
