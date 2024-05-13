import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Sliders</Link>
        </li>
        <li>
          <Link to="/add">Add Slider</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
