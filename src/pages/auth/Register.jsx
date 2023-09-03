import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const registerUser = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/users/register",
      user
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [input, setInput] = useState(initialState);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    registerUser(input);
    setInput(initialState);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="shadow-md flex flex-col max-w-3xl md:m-auto md:mt-12 m-2 mt-12 border-2 border-black pr-6 pl-6 p-4 rounded-md"
    >
      <h2>Register</h2>

      <input
        onChange={handleChange}
        value={input.name}
        type="text"
        placeholder="Name"
        className="rounded-sm border border-black p-2 mt-2 mb-2"
        name="name"
      />
      <input
        className="rounded-sm border border-black p-2 mt-2 mb-2"
        onChange={handleChange}
        value={input.email}
        type="email"
        placeholder="Email"
        name="email"
      />
      <input
        className="rounded-sm border border-black p-2 mt-2 mb-2"
        onChange={handleChange}
        value={input.password}
        type="password"
        placeholder="Password"
        name="password"
      />
      <Link to="/login"  className="text-sm text-blue-700" >Already have an account?</Link>
      <button className="text-white border-2 mt-2 bg-black border-black p-2 hover: cursor-pointer hover:bg-slate-800">
        Register
      </button>
    </form>
  );
};
