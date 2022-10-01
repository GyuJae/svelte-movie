import axios from 'axios';

export type TMovieCategory = "top_rated" | "popular" | "upcoming" | "now_playing";

export interface IMovie {
  adult: boolean
  backdrop_path?: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path?: string
  release_date?: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IMovieResult {
  dates: { maximum: string; minimum: string }
  page: number
  results: IMovie[]
  total_pages: number
  total_results: number
}

export const getMovies = async (category: TMovieCategory): Promise<IMovie[]> => {
  const results = await axios.get<IMovieResult>(`https://api.themoviedb.org/3/movie/${category}?api_key=962cebc1820ada99a807125b7f1fdcbf`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(data => data.data.results)
    .then(movies => movies.map(
      movie => ({
        ...movie,
        backdrop_path: movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : undefined,
        poster_path: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : undefined
      }))
    )

  return results;
}
