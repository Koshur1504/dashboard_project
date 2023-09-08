import { Navigate } from "react-router-dom";
import { useFirebase } from "../Context/firebaseContext";

const ProtectedRoute = ({ children }) => {
  const firebase = useFirebase();

  if (firebase.loggedIn === false) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
