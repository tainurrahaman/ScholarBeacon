import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UseAuth = () => {
  const authHook = useContext(AuthContext);
  return authHook;
};

export default UseAuth;
