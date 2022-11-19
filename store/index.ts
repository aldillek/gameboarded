import { configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const gamesApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7057/api/" }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: (skip: string) => (skip ? `games?skip=${skip}` : `games`),
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});
