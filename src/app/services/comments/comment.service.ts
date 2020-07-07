import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../../models/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private HttpClient: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.HttpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getCommentsByPostId(postId: string): Observable<Comment[]> {
    return this.HttpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}
