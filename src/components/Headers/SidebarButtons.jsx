import React, { useContext } from "react";
import { CiLogout, CiSettings, CiViewBoard } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineHelpOutline } from "react-icons/md";
import { AuthContext } from "../../store/ContextAuth";
import { IoCameraOutline } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaGlobeAfrica } from "react-icons/fa";

export function SidebarButtons() {
  const { firebaseApp, user } = useContext(AuthContext); // Assuming `user` is available in AuthContext

  const userSidebarButtons = [
    {
      title: "My ADS",
      icon: <FaRegHeart />,
      onclick: null,
    },
    {
      title: "Buy Business Package",
      icon: <LuClipboardList />,
      onclick: null,
    },
    {
      title: "Bought Packages & Billing",
      icon: <CiViewBoard />,
      onclick: null,
    },
    {
      title: "Help",
      icon: <MdOutlineHelpOutline />,
      onclick: null,
    },
    {
      title: "Settings",
      icon: <CiSettings />,
      onclick: null,
    },
    {
      title: "Logout",
      icon: <CiLogout />,
      onclick: () => {
        firebaseApp.auth().signOut(); // Sign-out action
      },
    },
  ];

  const defaultSidebarButtons = [
    {
      title: "Start Selling",
      icon: <IoCameraOutline />,
      onclick: null,
    },
    {
      title: "My ADS",
      icon: <FaRegHeart />,
      onclick: null,
    },
    {
      title: "Chats",
      icon: <IoChatbubbleOutline />,
      onclick: null,
    },
    {
      title: "Help",
      icon: <MdOutlineHelpOutline />,
      onclick: null,
    },
    {
      title: "Select language",
      icon: <FaGlobeAfrica />,
      onclick: null,
    },
  ];

  const buttonsToRender = user ? userSidebarButtons : defaultSidebarButtons;

  return (
    <div>
      {buttonsToRender.map((item, i) => (
        <div
          key={i}
          onClick={item.onclick}
          className="hover:bg-cyan-200 flex my-2 py-3 px-2 rounded-md cursor-pointer items-center"
        >
          <span className="text-2xl">{item.icon}</span>
          <h6 className="text-[17px] pl-3">{item.title}</h6>
        </div>
      ))}
    </div>
  );
}
