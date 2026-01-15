import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Lesson } from './types';
import mockData from '@const/mockData.json';
import { BASE_URL } from '@const/api';

export const lessonsApi = createApi({
  reducerPath: 'lessonsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/lesson`,
  }),
  tagTypes: ['Lessons'],
  endpoints: builder => ({
    getLessons: builder.query<Lesson[], void>({
      queryFn: async (_arg, _api, _extraOptions, _baseQuery) => {
        return { data: mockData as Lesson[] };
      },
      providesTags: ['Lessons'],
    }),
  }),
});

export const { useGetLessonsQuery } = lessonsApi;
