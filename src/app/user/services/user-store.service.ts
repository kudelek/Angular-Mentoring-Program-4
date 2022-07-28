import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  constructor(private userService: UserService) { }
  token = sessionStorage.getItem("token") || "";

  getCurrentUser(): Observable<any> {
    return this.userService.get("me", this.token);
  }

}
