import React from 'react';
import { Link } from 'react-router-dom';
export const Data = () => {
  return (
    <div>
      <h1 className='red'>Page: Data</h1> 
      <h2><Link className='bigsize' to='/'>Go to Home</Link></h2>
    </div>
  );
};
