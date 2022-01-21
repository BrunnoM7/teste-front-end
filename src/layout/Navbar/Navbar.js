import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div>
        
      </div>
      <div className='navigation'>
        <ul>
          <li>
            <Link to={'/'}>Menu</Link>
          </li>
          <li>
            <Link to={'/edit'}>Editar</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
