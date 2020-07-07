import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }
}





// --------------------------
// import { Component } from '@angular/core';
// import {UserService} from "../../services/users/user.service";
// import {User} from "../../models/User";
// import {PostService} from "../../services/posts/post.service";
// import {Post} from "../../models/Post";
// import {CommentService} from "../../services/comments/comment.service";
// import {Comment} from "../../models/Comment";
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   users: User[];
//   posts: Post[];
//   comments: Comment[];
//
//   constructor(
//     private UserService: UserService,
//     private PostService: PostService,
//     private CommentService: CommentService) {
//
//     this.UserService.getUsers().subscribe(data => {
//       this.users = data;
//       // console.log(data);
//     });
//
//     this.PostService.getPosts().subscribe(data => {
//       this.posts = data;
//       // console.log(data);
//     });
//
//     this.CommentService.getComments().subscribe(data => {
//       this.comments = data;
//       // console.log(data);
//     });
//   }
// }

