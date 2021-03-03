import './Header.css';

import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  console.log('task 1');
  return (
    <header>
      <span>Swivl's test</span>
      <Navigation />
    </header>
  );
};
export default Header;
