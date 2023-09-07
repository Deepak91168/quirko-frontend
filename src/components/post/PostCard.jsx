import React from "react";
import Button from "../ui/Button";
export const PostCard = ({ title, content, authorName }) => {
  return (
    <div className="max-w-screen-xl mx-auto mt-2 bg-slate-100 hover:bg-slate-200 hover:cursor-pointer rounded-lg">
      <div className="p-4 border-2 border-black mt-4 rounded-lg">
        <p className="font-extrabold text-blue-800">{title}</p>
        <p>{content}</p>
        <p className="text-sm">{authorName}</p>
        <div>
          <button className="text-sm text-blue-600 hover:font-bold">Read More</button>
        </div>
      </div>
    </div>
  );
};
