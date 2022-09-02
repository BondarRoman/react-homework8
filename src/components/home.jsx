import React from 'react';
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <div>
      <h1 className='red'>Page: Home</h1> 
      <h2><Link className='bigsize' to='/'>Go to Home</Link></h2>
    </div>
  );
};
