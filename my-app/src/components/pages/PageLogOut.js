import { firebase } from "../../config/firebase";

function SignOut() {

  return (
    <>
        {firebase.auth().signOut()}
    </>
  );
}

export default SignOut;
