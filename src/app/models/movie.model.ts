import { Genre } from "./genre.model";

export interface Movie {
    id: string;
    externalId: number;
    genres: Genre[];
    adult: boolean;
    backdropPath: string;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    releaseDate: string;
    title: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
}