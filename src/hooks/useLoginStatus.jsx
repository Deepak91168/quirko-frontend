import { useState, useEffect } from "react";
import Cookies from "js-cookie";
const useLoginStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setLoggedIn(true);
    } else if (token === undefined) {
      setLoggedIn(() => {
        return false;
      });
    }
    setCheckingStatus(false);
  }, []);

  return { loggedIn, checkingStatus };
};

export default useLoginStatus;
