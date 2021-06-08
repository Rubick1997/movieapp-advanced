export type ContentType = {
    id: number;
    media_type: string;
    poster_path: string;
    release_date: string;
    first_air_date: string;
    title: string;
    name: string;
    vote_average: number;
  };
  
export type GenresType = {
  [index: number]: { id: number; name:string };
}