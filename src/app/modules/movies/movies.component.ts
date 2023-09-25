import { Component, OnInit } from '@angular/core';
import { MoviesModel } from 'src/app/model/movie.model';
import { ApiService } from 'src/app/services/api.service';
import { ConstantUri } from 'src/app/utils/contantUri';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

movies: MoviesModel.MoviesResponse[] = [];

  constructor(
    private readonly ApiService: ApiService<any>,
  ) {}

  ngOnInit() {
    const getConfig = { url: ConstantUri.popularMovies, params: {api_key: ConstantUri.apikey} };

    this.ApiService.getService(getConfig).subscribe(val => {
      console.log(val);
      this.movies = val;
    });
  }

  seeDetail() {
    
  }

}
