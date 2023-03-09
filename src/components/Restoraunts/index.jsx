import React, { useState } from 'react';

import { useGetRestorauntsQuery } from '@/store/reducers/restoraunt.reducer';

import { Categories } from './Categories';
import { Item } from './Item';

const options = [
  { value: '', name: 'Все' },
  { value: 1, name: '1' },
  { value: 2, name: '2' },
  { value: 3, name: '3' },
];

export const Restoraunts = () => {
  const [count, setCount] = useState(options[0].value);
  const { data: restoraunts, isSuccess } = useGetRestorauntsQuery(count);

  return (
    <div className="row g-5">
      <div className="col-sm-9">
        <h2 className="display-6 mb-5">Список ресторанов</h2>

        <div className="row mb-4">
          <label htmlFor="category" className="form-label col-form-label col-2">
            Количество
          </label>
          <div className="col">
            <select
              className="form-select"
              id="category"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            >
              {options.map((opt) => {
                return (
                  <option key={opt.name} value={opt.value}>
                    {opt.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="row g-4">
          {isSuccess &&
            restoraunts.map((item) => <Item key={item.id} {...item} />)}
        </div>
      </div>
      <div className="col-sm-3">
        <h3 className="display-6 mb-5">Категории</h3>
        <Categories />
      </div>
    </div>
  );
};
