import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`text-white hover:bg-white border-2 border-black hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-white dark:focus:ring-gray-700 dark:border-gray-700 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
