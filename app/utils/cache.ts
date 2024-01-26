import { DetailedUser } from "../types/user";

interface Cache {
  [key: string]: any;
}

let cache: Cache = {};

export const setCache = (key: string, data: DetailedUser[]) => {
  cache[key] = data;
};

export const getCache = (key: string) => {
  return cache[key];
};
