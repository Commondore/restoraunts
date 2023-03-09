import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const restoApi = createApi({
  reducerPath: 'restorauntsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api/' }),
  endpoints: (builder) => ({
    getRestoraunts: builder.query({
      query: () => 'restorans',
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
