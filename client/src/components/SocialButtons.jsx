import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div className="flex gap-4">
      <button className="flex-1 flex items-center justify-center border rounded-lg py-2 hover:bg-gray-100">
        <FcGoogle className="text-xl mr-2" /> Google
      </button>
      <button className="flex-1 flex items-center justify-center border rounded-lg py-2 hover:bg-gray-100">
        <FaGithub className="text-xl mr-2" /> GitHub
      </button>
    </div>
  );
};

export default SocialButtons;
