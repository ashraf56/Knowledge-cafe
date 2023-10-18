import React from 'react';

const Navbar = () => {
    return (
        <div>
              <nav className="navbar sticky-top  navbar-expand-lg navbar-light bg-light">
       <div className="container">
              <a className="navbar-brand text-dark fs-4 fw-bold" >Knowledge Cafe</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
           
              <ul className="navbar-nav ms-auto text-dark fs-6 fw-bold" >
              <li className="nav-item ">
                <a className="nav-link text-dark " aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">About</a>
              </li>
             
            </ul>

            </div>
            </div>
      
      </nav>
        </div>
    );
};

export default Navbar;