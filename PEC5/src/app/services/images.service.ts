import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image.interface';
import { ImagenCompleta } from '../models/image.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http:HttpClient) { }

  getAllImages(tema:string):Observable<ImagenCompleta> { //ojo, nos devuelve un json y dentro de el está el array
    return this.http.get<ImagenCompleta>('https://pixabay.com/api/?key=44245565-ad517d88569bc32031f077fe7&q='+tema+'&image_type=photo');
  }

  getImageById(id:string):Observable<ImagenCompleta>{
    return this.http.get<ImagenCompleta>('https://pixabay.com/api/?key=44245565-ad517d88569bc32031f077fe7&q=heroes&image_type=photo&id='+id)
  }
}


