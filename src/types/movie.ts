export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface MovieDetail extends Movie {
  Plot: string;
  Genre: string;
  Director: string;
  Actors: string;
  Released: string;
  imdbRating: string;
}
