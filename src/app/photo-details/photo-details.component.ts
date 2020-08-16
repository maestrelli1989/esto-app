import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Photo } from '../photo';
import { PhotoDataService } from '../photo-data.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: [ './photo-details.component.scss' ]
})

export class PhotoDetailsComponent implements OnInit {
  
  @Input() photo: Photo;
  favoritePhotos: Array<{id: number, url: string, title: string}>;

  constructor(
    private route: ActivatedRoute,
    private photoDataService: PhotoDataService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Esto App | Photo');
    this.getPhoto();
    this.photoDataService.currentState.subscribe(favorite => this.favoritePhotos = favorite);
  }

  getPhoto(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.photoDataService.getPhoto(id).subscribe(photo => this.photo = photo);
  }

  removePhoto(photo: number): void {
    this.favoritePhotos.splice(photo, 1);
    this.photoDataService.updateFavoritesList(this.favoritePhotos);
  }
}