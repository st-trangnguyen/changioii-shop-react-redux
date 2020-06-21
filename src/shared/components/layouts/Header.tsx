import React from 'react';

const Header = () => {
  return(
    <header className="header py-3 header-fixed">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div></div>
        <a className="logo">Changioii</a>
        <ul className="user-action d-flex justify-content-between">
          <li className="user-action-item">
            <button className="btn btn-has-icon btn-user-action">
              <span className="icon-search"></span>
            </button>
          </li>
          <li className="user-action-item">
            <button className="btn btn-has-icon btn-user-action">
              <span className="icon-user"></span>
            </button>
          </li>
          <li className="user-action-item">
            <a className="btn btn-has-icon btn-user-action">
              <span className="icon-cart"></span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
