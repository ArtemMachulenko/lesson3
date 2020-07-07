import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private HttpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.HttpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostsByUserId(userId: string): Observable<Post[]> {
    return this.HttpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
}
