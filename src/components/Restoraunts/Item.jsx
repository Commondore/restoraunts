import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({
  title,
  description,
  average,
  status,
  categories,
  image,
}) => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          src={image?.formats?.small?.url}
          className="card-img-top"
          alt={title}
        />
        <div className="card-header text-end">
          Средний чек: <strong>{average}</strong>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="mt-3">
            <Link className="btn btn-primary btn-sm">Подробнее</Link>
          </div>
        </div>

        <div className="card-footer d-flex justify-content-between align-items-center">
          <div>
            {categories.map((cat) => {
              return <div key={cat.id}>{cat.name}</div>;
            })}
          </div>
          <span className="badge text-bg-success">
            {status ? 'Открыть' : 'Закрыто'}
          </span>
        </div>
      </div>
    </div>
  );
};
