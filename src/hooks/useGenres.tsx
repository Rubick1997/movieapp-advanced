import { GenresType } from "../types";

const useGenres = (selectedGenres: GenresType[]) => {
  if (selectedGenres.length < 1) return "";

  const genreIds = selectedGenres.map((item) => String(item.id));

  return genreIds.reduce((acc, curr) => acc + "," + curr);
};

export default useGenres;
