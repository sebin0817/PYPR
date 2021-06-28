import { useState, useEffect, useContext } from "react";
import { firestore } from "../config/firebase";
import { useUser } from "../providers/UserProvider";
import "./Tables.css";

function DisplayPos() {
  const user = useUser();
  const [positions, setPositions] = useState([]); //create state to store data

  useEffect(() => {
    if (!user) {
      return;
    }
    console.log(user);
    console.log(user.email);
    firestore
      .collection("positions")
      .where("userID", "==", user.email)
      .onSnapshot((snapshot) => {
        setPositions(snapshot.docs.map((doc) => doc.data()));
      });
  }, [user]);
  return (
    <table class="DisplayTable">
      <thead>
        <tr>
          <th>ticker</th>
          <th>quantity</th>
        </tr>
      </thead>
      <tbody>
        {positions.map((vari) => (
          <tr>
            <td>{vari.ticker}</td>
            <td>{vari.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DisplayPos;
