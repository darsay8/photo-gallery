import React from 'react';
import Search from './Search';

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <div>
        <h1 className="title is-1">
          Beautiful Images{' '}
          <span role="img" aria-label="camera">
            📸
          </span>
        </h1>
        <h2 className="subtitle is-4">
          The most awesome
          <span role="img" aria-label="leaks">
            ✨
          </span>
          photos around the world
        </h2>
      </div>
      <Search searchChange={onSearch} />
    </header>
  );
};

export default Header;
