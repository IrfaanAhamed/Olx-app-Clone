import { Alert, Typography } from "@material-tailwind/react";
import { registerFormControls } from "../../config";
import { CommonForm } from "../../components/common/form";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/ContextAuth";

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
      className="mt-8 mb-2 px-5 mx-2 py-9 rounded-xl bg-primary shadow-lg"
    >
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      {alertMessage && (
        <Alert className="mt-4 w-full"  color="red">
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
    </form>
  );
}
