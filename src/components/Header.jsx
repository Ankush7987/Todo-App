import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg mb-4">
      <div className="container d-flex justify-content-center">
        <a
          className="navbar-brand todo-app-title"
          href="/"
          style={{
            fontWeight: 'bold',
            fontSize: '2rem',
            letterSpacing: '1px'
          }}
        >
          Todo App
        </a>
      </div>
    </nav>
  );
};

export default Header;