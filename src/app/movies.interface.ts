// export interface MovieDetails {
//   adult?: boolean;
//   backdrop_path: string;
//   id: number;
//   title: string;
//   original_language: string;
//   original_title: string;
//   overview: string;
//   poster_path: string;
//   media_type: string;
//   genre_ids?: (number)[] | null;
//   popularity: number;
//   release_date: string;
//   video: boolean;
//   vote_average: number;
//   vote_count?: number;
// }

export interface MovieData {
  page: number;
  results?: (MovieDetails)[];
  total_pages: number;
  total_results: number;
}
export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids?: (number)[] | null;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieVid {
  id: number;
  results?: (VideoData)[] | null;
}
export interface VideoData {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface CastData {
  id: number;
  cast?: (CastEntity)[] | null;
  crew?: (CrewEntity)[] | null;
}
export interface CastEntity {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
export interface CrewEntity {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string | null;
  credit_id: string;
  department: string;
  job: string;
}
