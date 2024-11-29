import { Typography, Button } from "@material-tailwind/react";
import React from "react";
import { FaCar } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { FaMobileButton } from "react-icons/fa6";
import { TbBrandCashapp } from "react-icons/tb";
import { TbBike } from "react-icons/tb";
import { FaTv } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Cars",
      icon: <FaCar />,
      onClick: () => navigate("/post/cars")
    },

    {
      title: "Properties",
      icon: <FaBuilding />,
      onClick: () => navigate("/post/properties")
    },
    {
      title: "Mobile",
      icon: <FaMobileButton />,
      onClick: () => navigate("/post/mobile")
    },
    {
      title: "Jobs",
      icon: <TbBrandCashapp />,
      onClick: () => navigate("/post/jobs")
    },
    {
      title: "Bikes",
      icon: <TbBike />,
      onClick: () => navigate("/post/bikes")
    },
    {
      title: "Electronics & Appliances",
      icon: <FaTv />,
      onClick: () => navigate("/post/electronics")
    },
    {
      title: "Commercial Vehicles & Spares",
      icon: <GiCarDoor />,
      onClick: () => navigate("/post/commercial-vehicles")
    },
    {
      title: "More Options",
      icon: "",
      onClick: () => navigate("/post/more-options")
    }
  ];

  return (
    <div>
      <Typography variant="h5" className="uppercase text-center my-3">
        Choose a Category
      </Typography>
      <div className="grid grid-cols-2">
        {categories.map((category, index) => (
          <Button
            key={index}
            onClick={category.onClick}
            className="flex flex-col border h-32 gap-4 items-center justify-center bg-white text-black rounded hover:bg-primary"
          >
            <span className="mr-2 text-3xl">{category.icon}</span>
            <Typography className="font-semibold text-base">{category.title}</Typography>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Main;
