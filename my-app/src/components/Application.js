import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./Signin";
import SignUp from "./Signup";
import ProfilePage from "./Profile";
import PasswordReset from "./Passwordreset";
import { useUser } from "../providers/UserProvider";

function Application() {
  const user = useUser();
  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <SignUp path="signUp" />
      <SignIn path="/" />
      <PasswordReset path="passwordReset" />
    </Router>
  );
}
export default Application;
