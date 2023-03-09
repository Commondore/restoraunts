import React from 'react';
import { NavLink } from 'react-router-dom';

export const Categories = () => {
  return (
    <div className="list-group">
      <NavLink to="/" className="list-group-item list-group-item-action active">
        Категория 1
      </NavLink>
      <NavLink to="/" className="list-group-item list-group-item-action">
        Категория 2
      </NavLink>
    </div>
  );
};
