import React from 'react';
import { NavLink } from 'react-router-dom';

import cn from 'clsx';

export const Link = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn('nav-link', isActive ? 'text-primary' : 'text-light')
      }
    >
      {children}
    </NavLink>
  );
};
