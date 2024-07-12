export interface Movie {
  id: number;
  title: string;
  duration: number;
  budget: number;
  releaseDate: string;
  description?: string;
  poster?: string;
  boxOffice: number;
  producers?: string[];
  cinematographers?: string[];
}
