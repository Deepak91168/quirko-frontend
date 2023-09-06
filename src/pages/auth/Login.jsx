import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/user/authSlice";
export const Login = () => {
  const Navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userLogin = async (user) => {
    try {
      dispatch(loginStart());
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        user
      );
      const { token } = response.data;
      dispatch(login(token));
      const decode = JSON.parse(atob(token.split(".")[1]));
      dispatch(loginSuccess(decode));
      Navigate("/profile");
    } catch (error) {
      console.log(error.response.data.message);
      dispatch(loginFailure(error.response.data.message));
    }
  };

  const initialState = {
    email: "",
    password: "",
  };
  const [input, setInput] = useState(initialState);
  const handleChange = (e) => {
    console.log(e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    userLogin(input);
    setInput(initialState);
    Navigate("/profile");
  };
  return (
    <form
      className="shadow-md flex flex-col max-w-3xl md:m-auto md:mt-12 m-2 mt-12 border-2 border-black pr-6 pl-6 p-4 rounded-md"
      onSubmit={onSubmit}
    >
      <h2>Login</h2>
      <input
        onChange={handleChange}
        value={input.email}
        type="email"
        className="rounded-sm border border-black p-2 mt-2 mb-2"
        placeholder="Email"
        name="email"
      />
      <input
        onChange={handleChange}
        value={input.password}
        type="password"
        className="rounded-sm border border-black p-2 mt-2 mb-2"
        placeholder="Password"
        name="password"
      />
      <Link to="/register" className="text-sm text-blue-700">
        Don't have an account?
      </Link>
      <button className="text-white border-2 mt-2 bg-black border-black p-2 hover: cursor-pointer hover:bg-slate-800">
        Login
      </button>
    </form>
  );
};
// TODO: Edit Profile Feature
// TODO: Delete Profile Feature
// TODO: Add Profile Picture Feature
// TODO: Add User Bio Feature
