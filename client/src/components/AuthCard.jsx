import React from "react";

const AuthCard = ({ title, children, footer }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-8 space-y-6">
      <h3 className="text-lg font-semibold text-center">{title}</h3>
      {children}
      <div className="flex items-center gap-3">
        <hr className="flex-grow border-gray-300" />
        <span className="text-gray-400 text-sm">Or continue with</span>
        <hr className="flex-grow border-gray-300" />
      </div>
      {footer}
    </div>
  );
};

export default AuthCard;
