import { IfFirebaseAuthed, IfFirebaseUnAuthed } from "@react-firebase/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/PageHome";
import Trade from "./components/pages/PageTrade";
import Portfolio from "./components/pages/PagePortfolio";
import Profile from "./components/pages/PageProfile";
import LogOut from "./components/pages/PageLogOut";
import "./App.css";
import { useUser } from "./providers/UserProvider";
import PageAuth from "./components/pages/PageLogin";
import { firebase } from "./config/firebase";

// var rootStyle = {
//   backgroundColor: "green",
//   color: "green",
//   height: "100vh",
// };

function App() {
  const user = useUser();
  return (
    <>
      <div className="App">
        {/* <IfFirebaseAuthed>
          <UserProvider> */}
        <Router>
          <Navbar />
          <Switch>
            {user ? (
              <>
                <Route path="/" exact component={Home} />
                <Route path="/trade" component={Trade} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/profile" component={Profile} />
                <Route path="/logout" component={LogOut} />
              </>
            ) : (
              <PageAuth />
            )}
          </Switch>
        </Router>
        {/* </UserProvider> */}
        {/* </IfFirebaseAuthed> */}
        {/* <IfFirebaseUnAuthed> */}

        {/* </IfFirebaseUnAuthed> */}
      </div>
    </>
  );
}

export default App;

// import React from "react";
// import Application from "./components/Application";
// import UserProvider from "./providers/UserProvider";
// import Navbar from './components/Navbar'

// function App() {
//   return (
//     <UserProvider>
//       <Application />
//     </UserProvider>
//   );
// }
// export default App;
