import React from 'react';
import { IoRestaurantOutline } from 'react-icons/io5';
import { Link as RouteLink } from 'react-router-dom';

import { Link } from './Link';
import { navData } from './navData';

export const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg mb-5 bg-dark">
        <div className="container">
          <RouteLink to="/" className="navbar-brand text-light">
            <IoRestaurantOutline />
            <span className="ms-2 d-inline-block"> Restoraunts</span>
          </RouteLink>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              {navData.map((nav) => (
                <Link key={nav.id} to={nav.to}>
                  {nav.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="container">{children}</div>
    </>
  );
};
