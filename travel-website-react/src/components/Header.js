import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Travel Adventures</h1>
      <nav>
        <ul className='header-nav'>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;