import { Button, MenuItem, Typography } from "@material-tailwind/react";
import userImg from "../../assets/images/user.png";
import React, { useContext } from "react";
import { SidebarButtons } from "./SidebarButtons";
import { AuthContext } from "../../store/ContextAuth";
import { useNavigate } from "react-router-dom";

function SidebarWithoutUser() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/auth/login");
  };
  return (
    <>
      <MenuItem className="flex items-center gap-2 flex-col max-w-full hover:bg-white bg-white text-black">
        <div className="flex items-center justify-start w-full my-2">
          <img className="h-20" src={userImg} alt="user" />
          <div className="pl-2">
            <Typography variant="h5">Welcome to OLX!</Typography>
            <Typography className="text-slate-600 text-sm ">
              Take charge of your buying and selling journey.
            </Typography>
          </div>
        </div>
        <div className="w-full">
          <SidebarButtons />
        </div>
        <Button className="bg-secondary w-full text-md" onClick={handleLogin}>
          Login
        </Button>
      </MenuItem>
    </>
  );
}

export default SidebarWithoutUser;
