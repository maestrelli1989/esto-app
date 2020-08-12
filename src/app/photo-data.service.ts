import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})

export class PhotoDataService {

  private apiUrl: string = 'http://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Photo[]>(url);
  } 

  getPhoto(id: number): Observable<Photo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Photo>(url);
  }

}
