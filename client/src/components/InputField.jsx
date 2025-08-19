import React from "react";

const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
};

export default InputField;
