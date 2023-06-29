const API_KEY = "f45552db674778bb14ffba401506e130";
const BASE_PATH = "https://api.themoviedb.org/3/";
const REGION = "KR";
const LANGUAGE = "ko-KO";

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
export function getAiringTodayTv() {
  return fetch(
    `${BASE_PATH}/tv/airing_today?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}`
  ).then((response) => response.json());
}

export function getOnTheAirTv() {
  return fetch(
    `${BASE_PATH}/tv/on_the_air?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}`
  ).then((response) => response.json());
}

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
