import { Card, Typography } from "@material-tailwind/react";
import { registerFormControls } from "../../config";
import { CommonForm } from "../../components/common/form";
import { useState } from "react";

const initialState = {
  userName: "",
  email: "",
  password: ""
};

export function AuthSignup() {
  const [formData, setFormData] = useState(initialState);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={onSubmit} className="mt-8 mb-2 max-w-56 sm:max-w-80">
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <CommonForm
        formControls={registerFormControls}
        formData={formData}
        buttonText={"Login"}
        setFormData={setFormData}
      />
      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account?
        <a
          href="/Olx-app-Clone/auth/login"
          className="font-medium text-gray-900 ml-1"
        >
          Sign In
        </a>
      </Typography>
    </form>
  );
}
