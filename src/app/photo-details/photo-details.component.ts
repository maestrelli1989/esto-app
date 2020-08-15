import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private photoDataService: PhotoDataService
  ) {}

  ngOnInit() {
    this.getPhoto();
    this.photoDataService.currentState.subscribe(message => this.favoritePhotos = message);
  }

  getPhoto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.photoDataService.getPhoto(id).subscribe(photo => this.photo = photo);
  }

  removePhoto(photo: any): void {
    this.favoritePhotos.splice(photo, 1);
    this.photoDataService.updateFavoritesList(this.favoritePhotos);
  }
}
