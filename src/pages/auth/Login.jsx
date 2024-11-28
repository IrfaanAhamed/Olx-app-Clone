import { Alert, Button, Typography } from "@material-tailwind/react";
import { CommonForm } from "../../components/common/form";
import { loginFormControls } from "../../config";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/ContextAuth";
import { ContinueWithBTN } from "../../components/auth/datas";

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
    const { email, password } = formData;

    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Logged In");
        navigate("/");
      })
      .catch((error) => {
        setAlertMessage(error.message);
      });
  }

  
  return (
    <form
      onSubmit={onSubmit}
      className=" p-5  rounded-xl bg-primary 
      shadow-lg flex items-center flex-col sm:flex-row w-full"
    >
      <div className="sm:w-1/2 w-full">
        <Typography variant="h4" color="blue-gray" className="">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal ">
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
          Don't have an account?
          <Link to="/auth/signup" className="font-medium text-gray-900 ml-1">
            Sign Up
          </Link>
        </Typography>
      </div>
      <div className="flex items-center my-2">
        <div className="flex-grow border-t border-gray-300 sm:hidden"></div>
        <span className="mx-2 text-gray-500">OR</span>
        <div className="flex-grow border-t border-gray-300 sm:hidden"></div>
      </div>
      <div className="flex flex-col gap-3 sm:w-1/2">
        {ContinueWithBTN.map((item, i) => (
          <Button
            key={i}
            size="lg"
            variant="outlined"
            color="blue-gray"
            className="flex items-center gap-3 justify-center"
          >
            <img src={item.img} alt={item.title} className="h-6 " />
            {item.title}
          </Button>
        ))}
        <Typography className="text-sm">
        By clicking Sign in, Continue with Google, Facebook, or Apple, you agree to Etsy's <a className="font-bold text-blue-600 underline" href="">Terms of Use</a> and <a className="font-bold text-blue-600 underline" href="">Privacy Policy</a>.
        </Typography>
        <Typography className="text-xs">
        Etsy may send you communications; you may change your preferences in your account settings. We'll never post without your permission.
        </Typography>
      </div>
    </form>
  );
}
