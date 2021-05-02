import React from 'react';
import './App.css';
import Images from './components/Images';
import Search from './components/Search';

const App = () => {
  return (
    <div className="App">
      <div className="container.is-fullhd">
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
          <Search />
        </header>
        <Images />
      </div>
    </div>
  );
};

export default App;
