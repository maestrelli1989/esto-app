import { Component, OnInit } from '@angular/core';

import { PhotoDataService } from '../photo-data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favoritePhotos: Array<{id: number, url: string, title: string}> = [];

  constructor(private photoDataService: PhotoDataService) { }

  ngOnInit() {
    this.photoDataService.currentState.subscribe(favorite => this.favoritePhotos = favorite);
  }

}
