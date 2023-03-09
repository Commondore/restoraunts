import React from 'react';
import { Link } from 'react-router-dom';

export const Item = () => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Italy</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            maxime.
          </p>
          <div className="mt-3">
            <Link className="btn btn-primary btn-sm">Подробнее</Link>
          </div>
        </div>

        <div className="card-footer d-flex justify-content-between">
          <div>Итальянский</div>
          <span className="badge text-bg-success">Открыто</span>
        </div>
      </div>
    </div>
  );
};
