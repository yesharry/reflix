const API_KEY = "f45552db674778bb14ffba401506e130";
const BASE_PATH = "https://api.themoviedb.org/3/";
const REGION = "KR";
const LANGUAGE = "ko-KO";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  title: string;
  overview: string;
  vote_average: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getPopularMovies() {
  return fetch(
    `${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}`
  ).then((response) => response.json());
}
