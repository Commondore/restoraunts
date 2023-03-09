import React, { useState } from 'react';

import {
  useGetCategoriesQuery,
  usePostRestorauntMutation,
  useUploadImageMutation,
} from '@/store/reducers/restoraunt.reducer';

export const AddForm = () => {
  const [files, setFiles] = useState(null);
  const [uploadImage, { isLoading: isLoadingImage }] = useUploadImageMutation();
  const { data: categories = [] } = useGetCategoriesQuery();
  const [postRestorant, { isLoading }] = usePostRestorauntMutation();

  const [restoData, setRestoData] = useState({
    title: '',
    description: '',
    status: true,
    image: null,
    average: '',
    categories: '',
  });

  const changeHandler = (e) => {
    setRestoData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('files', files);

    const image = await uploadImage(data).unwrap();

    const sendData = {
      ...restoData,
      image,
      categories: {
        connect: [parseInt(restoData.categories)],
      },
    };

    postRestorant(sendData);
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mt-3 mb-4 text-center">
                Добавить ресторан
              </h2>

              <form onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <label htmlFor="category" className="form-label">
                      Категория
                    </label>
                    <select
                      className="form-select"
                      id="category"
                      name="categories"
                      onChange={changeHandler}
                    >
                      <option value="" selected="selected" disabled="disabled">
                        Выбрать категорию
                      </option>
                      {categories.map((cat) => {
                        return (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        );
                      })}
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
                      name="title"
                      placeholder="Название ресторана"
                      onChange={changeHandler}
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
                      name="average"
                      placeholder="Средний чек"
                      onChange={changeHandler}
                    />
                  </div>

                  <div className="col-sm-6 mb-3">
                    <label htmlFor="status" className="form-label">
                      Статус заведения
                    </label>
                    <select
                      class="form-select"
                      id="status"
                      name="status"
                      onChange={changeHandler}
                    >
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
                      name="description"
                      placeholder="Описание ресторана"
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className="col-sm-12 mb-3">
                  <div className="input-group mb-3">
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      onChange={(e) => setFiles(e.target.files[0])}
                    />
                    <label className="input-group-text" htmlFor="image">
                      Загрузить картинку
                    </label>
                  </div>
                </div>
                <div className="text-center mb-3">
                  <button
                    className="btn btn-primary"
                    disabled={isLoadingImage || isLoading}
                  >
                    {isLoadingImage || isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Loading...</span>
                      </>
                    ) : (
                      'Добавить ресторан'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
