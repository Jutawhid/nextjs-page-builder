// CustomBlock.js
import React from 'react';

const CustomBlock = ({ data }:any) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
      <p>{data.text}</p>
    </div>
  );
};

export default CustomBlock;
