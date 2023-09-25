export namespace MoviesModel {

    export interface Result {
        adult: boolean;
        backdrop_ids: string;
        genre_ids: number[];
        id: number;
        original_languaje: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        relase_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }

    export interface MoviesResponse {
        page: number;
        results: Result[];
        total_pages: number;
        total_results: number;
    }

}