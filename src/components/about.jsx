import React from 'react';
import { Link } from 'react-router-dom';
export const About = () => {
  return (
    <div>
     <h1 className='red'> Page: About</h1> 
     <h2><Link className='bigsize' to='/'>Go to Home</Link></h2>
    </div>
  );
};