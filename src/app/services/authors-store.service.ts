import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {

  authors = new Subject;

  constructor(private authorsService: AuthorsService) { }



  getAll(): Observable<any> {
    return this.authorsService.get('all');
  }

  getAuthor(authorId: string): Observable<any> {
    console.log(this.authorsService.get(authorId))
    return this.authorsService.get(authorId);
  }

  addAuthor(name: string): Observable<any> {
    return this.authorsService.put('add', name);
  }

}
