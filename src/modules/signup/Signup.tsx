import React, { useContext, useEffect } from "react";
import SignupForm from "./components/SignupForm";
import { AuthContext } from "../../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../application/constants/AppRoutes";

const Signup = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext?.auth.authenticated) {
      navigate(`/${APP_ROUTES.DASHBOARD}`);
    }
  }, [authContext]);
  return (
    <div>
      <SignupForm />
    </div>
  );
};

export default Signup;
