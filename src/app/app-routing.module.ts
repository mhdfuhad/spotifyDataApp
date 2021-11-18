import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  {
    path: 'newReleases',
    component: NewReleasesComponent
  },
  {
    path: 'artist/:id',
    component: ArtistDiscographyComponent
  },
  {
    path: 'album/:id',
    component: AlbumComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'search',
    component: SearchResultsComponent
  },
  {
    path: 'favourites',
    component: FavouritesComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/newReleases'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
