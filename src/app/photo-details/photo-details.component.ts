import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Photo } from '../photo';
import { PhotoDataService } from '../photo-data.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: [ './photo-details.component.scss' ]
})
export class PhotoDetailsComponent implements OnInit {
  @Input() photo: Photo;

  constructor(
    private route: ActivatedRoute,
    private photoDataService: PhotoDataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.photoDataService.getPhoto(id)
      .subscribe(photo => this.photo = photo);
  }
}
