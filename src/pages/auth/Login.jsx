import { Card, Typography } from "@material-tailwind/react";
import { CommonForm } from "../../components/common/form";
import { loginFormControls } from "../../config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: ""
};

export function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  function onSubmit() {}

  return (
    <form onSubmit={onSubmit} className="mt-8 mb-2 max-w-64 sm:max-w-80 ">
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <CommonForm
        formControls={loginFormControls}
        formData={formData}
        buttonText={"Login"}
        setFormData={setFormData}
      />
      <Typography color="gray" className="mt-4 text-center font-normal">
        Don't have an account
        <Link to="/auth/signup" className="font-medium text-gray-900 ml-1">
          Sign Up
        </Link>
      </Typography>
    </form>
  );
}
