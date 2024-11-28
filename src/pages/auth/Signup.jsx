import { Alert, Button, Typography } from "@material-tailwind/react";
import { registerFormControls } from "../../config";
import { CommonForm } from "../../components/common/form";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/ContextAuth";
import { ContinueWithBTN } from "../../components/auth/datas";

const initialState = {
  userName: "",
  email: "",
  password: ""
};

export function AuthSignup() {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const { firebaseApp } = useContext(AuthContext);
  const onSubmit = (e) => {
    e.preventDefault();

    const { email, password, userName } = formData;

    // Validation
    if (!email || !password || !userName) {
      setAlertMessage("Please fill in all fields.");
      return;
    }

    // Firebase Authentication
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password) //creating account using email & pass
      .then((result) => {
        //create cheyda accountil <- username updating
        result.user.updateProfile({ displayName: userName }).then(() => {
          firebaseApp
            .firestore() // Add user details to Firestore
            .collection("user")
            .add({
              id: result.user.uid,
              userName: userName
            })
            .then(() => {
              setAlertMessage(
                "Account created successfully! Redirecting to login."
              );
              navigate("/auth/login");
            })
            .catch((firestoreError) => {
              console.error("Error adding user to Firestore:", firestoreError);
              setAlertMessage("An error occurred while saving your data.");
            });
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setAlertMessage(
            "The email address is already in use. Please use a different email."
          );
        } else {
          console.error("Error creating user:", error);
          setAlertMessage(error.message);
        }
      });
  };

  return (
    <form
      onSubmit={onSubmit}
      className=" p-5  rounded-xl bg-primary 
    shadow-lg flex items-center flex-col sm:flex-row w-full"
    >
      <div className="sm:w-1/2 w-full">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        {alertMessage && (
          <Alert className="mt-4 w-full" color="red">
            {alertMessage}
          </Alert>
        )}

        <CommonForm
          formControls={registerFormControls}
          formData={formData}
          buttonText={"signup"}
          setFormData={setFormData}
        />
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?
          <Link to="/auth/login" className="font-medium text-gray-900 ml-1">
            signin
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
          By clicking Sign in, Continue with Google, Facebook, or Apple, you
          agree to Etsy's{" "}
          <a className="font-bold text-blue-600 underline" href="">
            Terms of Use
          </a>{" "}
          and{" "}
          <a className="font-bold text-blue-600 underline" href="">
            Privacy Policy
          </a>
          .
        </Typography>
        <Typography className="text-xs">
          Etsy may send you communications; you may change your preferences in
          your account settings. We'll never post without your permission.
        </Typography>
      </div>
    </form>
  );
}
