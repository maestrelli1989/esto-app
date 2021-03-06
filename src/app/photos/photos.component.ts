import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Photo } from '../photo';
import { PhotoDataService } from '../photo-data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})

export class PhotosComponent implements OnInit {

  photos: Photo[];
  visibleImages: number = 9;
  favoritePhotos: Array<{id: number, url: string, title: string}> = [];

  constructor(
    private photoDataService: PhotoDataService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Esto App | Home');
    this.getPhotos();
    this.photoDataService.currentState.subscribe(favorite => this.favoritePhotos = favorite);
  }

  getPhotos(): void {
    this.photoDataService.getPhotos().subscribe(data => this.photos = data);
  }

  addToFav(photo: any, event: any) {
    this.favoritePhotos.push({'id': photo.id, 'url': photo.url, 'title': photo.title});
    this.photoDataService.updateFavoritesList(this.favoritePhotos);
    event.target.disabled = true;
  }

  increaseVisibleImagesByClick(): void {
    this.visibleImages += 1;
  }

  increaseVisibleImagesCounter(): void {
    this.visibleImages += 1;
  }

  @HostListener('window:scroll') increaseVisibleImagesByScroll(): void {
      setTimeout(() => { this.increaseVisibleImagesCounter() }, 300);
    }

}