import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DOMAIN, api_version } from "../../config/index.ts";

const baseUrl: string = `${DOMAIN}/api/${api_version}/`;

export const securitiesApi = createApi({
  reducerPath: "securitiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getSecurities: builder.query({
      query: ({ limit = 5, offset = 0 }) =>
        `securities?offset=${offset}&limit=${limit}`,
    }),
    getSecurityDetails: builder.query({
      query: (ticker) => `securities/${ticker}`,
    }),
  }),
});

export const { useGetSecuritiesQuery, useGetSecurityDetailsQuery } =
  securitiesApi;
