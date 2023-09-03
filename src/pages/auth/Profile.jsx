import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const getUsers = async (setUser) => {
  try {
    const token = localStorage.getItem("token");
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
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUsers(setUser);
  }, []);

  const handelLogout = () => {
    localStorage.removeItem("token");
    console.log("logout");
    navigate("/login");
  };

  return (
    <>
      {user && (
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
