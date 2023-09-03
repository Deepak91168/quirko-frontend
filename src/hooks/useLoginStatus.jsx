import { useState, useEffect } from "react";
const useLoginStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    } else if (!token) {
      setLoggedIn(() => {
        return false;
      });
    }
    setCheckingStatus(false);
  }, []);

  return { loggedIn, checkingStatus };
};

export default useLoginStatus;
