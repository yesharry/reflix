const API_KEY = "f45552db674778bb14ffba401506e130";
const BASE_PATH = "https://api.themoviedb.org/3/";
const REGION = "KR";
const LANGUAGE = "ko-KO";

export const LIST_TYPE = [
  "nowPlaying",
  "upcomingMovies",
  "popularMovies",
  "topRated",
  "tvPopular",
  "tvTopRated",
];

export interface IData {
  id: number;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  title?: string;
  name?: string;
  overview: string;
  vote_average: string;
}

export interface IGetDataResult {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IData[];
  total_pages: number;
  total_results: number;
}

// 영화 데이터
export function getPopularMovies() {
  return fetch(
    `${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}`
  ).then((response) => response.json());
}

export function getNowPlayingMovies() {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}`
  ).then((response) => response.json());
}

export function getUpcomingMovies() {
  return fetch(
    `${BASE_PATH}/movie/upcoming?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}`
  ).then((response) => response.json());
}

export function getTopRatedMovies() {
  return fetch(
    `${BASE_PATH}/movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}`
  ).then((response) => response.json());
}

// 티비 데이터
export function getPopularTv() {
  return fetch(
    `${BASE_PATH}/tv/popular?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}`
  ).then((response) => response.json());
}

export function getTopRatedTv() {
  return fetch(
    `${BASE_PATH}/tv/top_rated?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}`
  ).then((response) => response.json());
}

interface ISearch {
  id: number;
  title?: string;
  name?: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  backdrop_path?: string;
  media_type: string;
  release_date: string;
  vote_average: number;
}

export interface IGetSearchResult {
  page: number;
  results: ISearch[];
  total_pages: number;
  total_results: number;
}

export function getSearch(keyword: string) {
  return fetch(
    `${BASE_PATH}/search/multi?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}&query=${keyword}`
  ).then((response) => response.json());
}

// detail data
export interface IGenre {
  id: number;
  name: string;
}

export interface IDetail {
  id: number;
  overview: string;
  title?: string;
  original_title?: string;
  name?: string;
  vote_average: number;
  runtime: number;
  backdrop_path?: string;
  poster_path: string;
  genres: IGenre[];
  release_date?: string;
  first_air_date?: string;
  tagline?: string;
}

export function getDetailData(requestUrl: string, id: number) {
  return fetch(
    `${BASE_PATH}/${requestUrl}/${id}?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}`
  ).then((response) => response.json());
}
