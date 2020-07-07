import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../services/comments/comment.service";
import {Comment} from "../../models/Comment";

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: Comment[];
  constructor(private CommentService: CommentService) {
    this.CommentService.getComments().subscribe(data => {
      this.comments = data;
    });
  }

  ngOnInit(): void {
  }

}
