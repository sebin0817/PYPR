import React, { useState, useEffect, Component, createContext } from "react";
import { firebase, generateUserDocument } from "../config/firebase";

// export const UserContext = createContext({ user: null });
// class UserProvider extends Component {
//   state = {
//     user: null,
//   };

//   componentDidMount = async () => {
//     const unsubscribed = auth.onAuthStateChanged(async (userAuth) => {
//       console.log("ssss");
//       if (!userAuth) {
//         this.setState({ user: null });
//         console.log("userAuth is nullllll");
//         return;
//       }

//       const user = await generateUserDocument(userAuth);
//       console.log(user);
//       this.setState({ user });
//     });
//     this.cleanup = unsubscribed;
//   };

//   componentWillUnmount() {
//     this.cleanup();
//   }

//   render() {
//     return (
//       <UserContext.Provider value={this.state.user}>
//         {this.props.children}
//       </UserContext.Provider>
//     );
//   }
// }
// export default UserProvider;

export function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((userAuth) => {
      if (!userAuth) {
        setUser(null);
        return;
      }
      setUser(userAuth);
    });

    return () => unsubscribe();
  }, []);

  return user;
}
