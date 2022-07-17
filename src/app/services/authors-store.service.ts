import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {

  authors = new Subject;

  constructor(private authorsService: AuthorsService) { }



  getAll() {
    return this.authorsService.get('authors/all');
  }

  getAuthor(authorId: string) {
    console.log(this.authorsService.get(`authors/${authorId}`))
    return this.authorsService.get(`authors/${authorId}`);
  }

}
