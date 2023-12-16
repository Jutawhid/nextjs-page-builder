// components/CustomButton.js
import React from 'react';

const CustomButton = ({ text} : any) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2">
      {text}
    </button>
  );
};

export default CustomButton;
