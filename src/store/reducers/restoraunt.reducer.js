import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as qs from 'qs';

const restorauntsquery = (count) =>
  qs.stringify(
    {
      populate: ['image', 'categories'],
      pagination: {
        pageSize: count ? count : 25,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

export const restoApi = createApi({
  reducerPath: 'restorauntsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api/' }),
  tagTypes: ['Restoraunts'],
  endpoints: (builder) => ({
    getRestoraunts: builder.query({
      query: (count) => `restorans?${restorauntsquery(count)}`,
      transformResponse: (response) => response.data,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Restoraunts', id })),
              { type: 'Restoraunts', id: 'LIST' },
            ]
          : [{ type: 'Restoraunts', id: 'LIST' }],
    }),
    postRestoraunt: builder.mutation({
      query: (data) => ({
        url: 'restorans',
        method: 'POST',
        body: {
          data,
        },
      }),
      invalidatesTags: [{ type: 'Restoraunts', id: 'LIST' }],
    }),

    uploadImage: builder.mutation({
      query: (file) => ({
        url: 'upload',
        method: 'POST',
        body: file,
      }),
    }),

    getRestorantById: builder.query({
      query: (id) => `restorans/${id}`,
    }),

    getCategories: builder.query({
      query: () => 'categories',
      transformResponse: (res) => res.data,
    }),
  }),
});

export const {
  useGetRestorauntsQuery,
  usePostRestorauntMutation,
  useLazyGetRestorantByIdQuery,
  useUploadImageMutation,
  useGetCategoriesQuery,
} = restoApi;
