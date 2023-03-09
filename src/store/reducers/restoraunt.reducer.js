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
  endpoints: (builder) => ({
    getRestoraunts: builder.query({
      query: (count) => `restorans?${restorauntsquery(count)}`,
      transformResponse: (response) => response.data,
    }),
    postRestoraunt: builder.mutation({
      query: (data) => ({
        url: 'restorans',
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: {
          data,
        },
      }),
    }),

    getRestorantById: builder.query({
      query: (id) => `restorans/${id}`,
    }),
  }),
});

export const {
  useGetRestorauntsQuery,
  usePostRestorauntMutation,
  useLazyGetRestorantByIdQuery,
} = restoApi;
