import { Card } from "@material-tailwind/react";
import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-secondary w-1/2 px-12">
        <div className="max-w-md  text-primary">
          <h1 className="text-7xl font-bold tracking-wide">OLX</h1>
        </div>
      </div>
      <div
        className="flex flex-1 items-center justify-center 
      bg-primary mx-6 my-16 sm:my-12 sm:mx-6 m-0 lg:mx-28 rounded-2xl
      "
      >
        {/* https://www.material-tailwind.com/docs/react/form# */}
        <Card color="transparent" shadow={false}>
          <Outlet />
        </Card>
      </div>
    </div>
  );
}

export default AuthLayout;
