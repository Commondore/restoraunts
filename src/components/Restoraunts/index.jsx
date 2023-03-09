import React from 'react';

import { Categories } from './Categories';
import { Item } from './Item';

export const Restoraunts = () => {
  return (
    <div className="row g-5">
      <div className="col-sm-9">
        <h2 className="display-6 mb-5">Список ресторанов</h2>
        <div className="row g-4">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <div className="col-sm-3">
        <h3 className="display-6 mb-5">Категории</h3>
        <Categories />
      </div>
    </div>
  );
};
