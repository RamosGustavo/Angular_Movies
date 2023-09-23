import { NgModule } from '@angular/core';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';




@NgModule({
    declarations: [
        MoviesComponent,
        MoviesDetailComponent,
    ],
    imports: [
        MoviesRoutingModule,
        CardModule,
        ButtonModule
    ],
})
export class MoviesModule { }
