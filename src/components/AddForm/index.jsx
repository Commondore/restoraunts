import React from 'react';

export const AddForm = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title mt-3 mb-4 text-center">
              Добавить ресторан
            </h2>

            <form>
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <label htmlFor="category" className="form-label">
                    Категория
                  </label>
                  <select class="form-select" id="category">
                    <option value="" selected="selected" disabled="disabled">
                      Выбрать категорию
                    </option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                  </select>
                </div>

                <div className="col-sm-6 mb-3">
                  <label htmlFor="title" className="form-label">
                    Название ресторана
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Название ресторана"
                  />
                </div>

                <div className="col-sm-6 mb-3">
                  <label htmlFor="average" className="form-label">
                    Средний чек
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="average"
                    placeholder="Средний чек"
                  />
                </div>

                <div className="col-sm-6 mb-3">
                  <label htmlFor="status" className="form-label">
                    Статус заведения
                  </label>
                  <select class="form-select" id="status">
                    <option value="1" selected>
                      Открыто
                    </option>
                    <option value="0">Закрыто</option>
                  </select>
                </div>

                <div className="col-sm-12 mb-4">
                  <label htmlFor="description" className="form-label">
                    Описание
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Описание ресторана"
                  />
                </div>
              </div>
              <div className="col-sm-12 mb-3">
                <div class="input-group mb-3">
                  <input type="file" class="form-control" id="image" />
                  <label class="input-group-text" for="image">
                    Загрузить картинку
                  </label>
                </div>
              </div>
              <div className="text-center mb-3">
                <button className="btn btn-primary">Добавить ресторан</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
