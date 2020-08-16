import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { PhotoDataService } from '../photo-data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})

export class FavoritesComponent implements OnInit {

  favoritePhotos: Array<{id: number, url: string, title: string}>;

  constructor(
    private photoDataService: PhotoDataService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Esto App | Favorite Photos');
    this.photoDataService.currentState.subscribe(favorite => this.favoritePhotos = favorite);
  }

}