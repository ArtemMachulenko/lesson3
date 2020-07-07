import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.HttpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: string): Observable<User> {
    return this.HttpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

}
