import { Alert, Typography } from "@material-tailwind/react";
import { CommonForm } from "../../components/common/form";
import { loginFormControls } from "../../config";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/ContextAuth";

const initialState = {
  email: "",
  password: ""
};

export function AuthLogin() {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const { firebaseApp } = useContext(AuthContext);

  function onSubmit(e) {
    e.preventDefault();
    const { email, password, userName } = formData;

    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Logged In");
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setAlertMessage(error.message);
      });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-8 mb-2 px-5 mx-2 py-9 rounded-xl bg-primary shadow-lg"
    >
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Please enter your email and password
      </Typography>
      {alertMessage && (
        <Alert className="mt-4 w-full" color="red">
          {alertMessage}
        </Alert>
      )}
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
