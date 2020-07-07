import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/Post";
import {PostService} from "../../services/posts/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  posts: Post[];
  userId: string;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(data => {
      this.userId = data.userId;
    });

    this.postService.getPostsByUserId(this.userId).subscribe(data => {
      this.posts = data;
    });
  }

  ngOnInit(): void {
  }

}
