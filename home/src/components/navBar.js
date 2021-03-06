import React, {createContext}  from 'react';
import { Link } from 'react-router-dom';

export const userContext = createContext();

const Header = () => {
  
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/addPost">Add Post</Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Header;
