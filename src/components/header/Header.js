import React from 'react';
import { Nav } from '../nav/Nav';
import './header-style.css';

export const Header = () => {
  return (
    <header>
      <h1>
        Dashboard <span className='small'>Project</span>
      </h1>
      <Nav />
    </header>
  );
};
