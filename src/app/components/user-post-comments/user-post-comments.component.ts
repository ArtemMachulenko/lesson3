import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../services/comments/comment.service";
import {Comment} from "../../models/Comment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-post-comments',
  templateUrl: './user-post-comments.component.html',
  styleUrls: ['./user-post-comments.component.css']
})
export class UserPostCommentsComponent implements OnInit {
  comments: Comment[];
  postId: string;

  constructor(
    private CommentService: CommentService,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data => {
      this.postId = data.postId;
    });

    this.CommentService.getCommentsByPostId(this.postId).subscribe(data => {
      this.comments = data;
    });

  }

  ngOnInit(): void {
  }

}
