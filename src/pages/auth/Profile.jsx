import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/user/authSlice";
import Cookies from "js-cookie";
const getUsers = async (setUser) => {
  try {
    const token = Cookies.get("token");
    console.log(token);
    const response = await axios.get(
      "http://localhost:8000/api/users/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const user = response.data;
    setUser(user);
  } catch (error) {
    console.log(error);
  }
};

export const Profile = () => {
  const { initialUser } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialUser);
  useEffect(() => {
    getUsers(setUser);
  }, []);

  const handelLogout = () => {
    console.log("logout");
    setUser(null);
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      {(token && user) && (
        <div>
          <div className="text-xl">User Details</div>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      )}
      <button onClick={handelLogout} className="border-2 border-black p-2">
        Logout
      </button>
    </>
  );
};
