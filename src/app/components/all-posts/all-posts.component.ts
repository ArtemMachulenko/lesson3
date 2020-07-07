import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/posts/post.service";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: Post[];
  constructor(private PostService: PostService) {
    this.PostService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  ngOnInit(): void {
  }

}
