import axios from 'axios';

export type TvCategory = 'top_rated' | 'popular' | 'airing_today' | 'on_the_air'

export interface ITV {
  backdrop_path?: string
  first_air_date?: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path?: string
  vote_average: number
  vote_count: number
}

export interface ITVResult {
  page: number
  results: ITV[]
  total_pages: number
  total_results: number
}
export const getTVs = async (category: TvCategory): Promise<ITV[]> => {
  const results = await axios.get<ITVResult>(`https://api.themoviedb.org/3/tv/${category}?api_key=962cebc1820ada99a807125b7f1fdcbf`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(data => data.data.results)
    .then(tvs => tvs.map(
      tv => ({
        ...tv,
        backdrop_path: tv.backdrop_path ? `https://image.tmdb.org/t/p/w500${tv.backdrop_path}` : undefined,
        poster_path: tv.poster_path ? `https://image.tmdb.org/t/p/w500${tv.poster_path}` : undefined
      }))
    )

  return results;
}
