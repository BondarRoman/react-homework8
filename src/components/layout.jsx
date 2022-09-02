import React from 'react';
import { Outlet, Link } from 'react-router-dom';


export  const Layout = () => {
  return (
    <>
      <header>
          <Link to='/'>Home</Link>
          <Link to='about'>About</Link>
          <Link to='data'>Data</Link>
      </header>
      <main>
        <Outlet>

        </Outlet>
      </main>
    </>
  );
};