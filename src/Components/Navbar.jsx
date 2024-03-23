import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-2 bg-black">
      <div className="container">
        <a className="navbar-brand" href="/" style={{ fontSize: "30px"}}>Notes App</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/about" style={{ fontSize: 'large', marginLeft: '20px' }}>ABOUT</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Notes
                </a>
                <ul className="dropdown-menu fs-lg" aria-labelledby="navbarDropdownMenuLink" style={{ fontSize: 'large'}}>
                  <a className="dropdown-item" href="/notes">All Notes</a>
                  <a className="dropdown-item" href="/notes/add">Add A Note</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/auth/logout">Logout</a>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/Login" style={{ fontSize: 'large' }}>LOGIN</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Signup" style={{ fontSize: 'large', marginLeft: '25px' }}>REGISTER</a>

                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
