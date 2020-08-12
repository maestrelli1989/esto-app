import { Component, OnInit } from '@angular/core';

import { Photo } from '../photo';
import { PhotoDataService } from '../photo-data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos: Photo[];
  visibleImages: number = 6;
  favoritePhotos: Array<{id: number, url: string, title: string}> = [];

  constructor(private photoDataService: PhotoDataService) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos(): void {
    this.photoDataService.getPhotos()
      .subscribe(
        data => this.photos = data
      );
  }

  increaseVisibleImages() {
    this.visibleImages += 6;
  }

  addToFav(photo: any, event: any) {
    this.favoritePhotos.push({'id': photo.id, 'url': photo.url, 'title': photo.title});
    event.target.disabled = true;
    localStorage.setItem('fav', JSON.stringify(this.favoritePhotos));
  }

}