import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <img src="/logo.png" alt="Windbnb logo" className="h-8" />
      <SearchBar />
    </header>
  );
};

export default Header;