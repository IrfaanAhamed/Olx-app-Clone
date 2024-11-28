import { Avatar, Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import React from "react";
import userImg from "../../assets/images/user.png";
import SidebarMenuList from "./SidebarUserMenuList";

function Sidebar() {
  return (
    <div>
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
          <SidebarMenuList />
        </MenuList>
      </Menu>
    </div>
  );
}

export default Sidebar;
