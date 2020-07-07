import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { UserComponent } from './components/user/user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserPostCommentsComponent } from './components/user-post-comments/user-post-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
    PostComponent,
    CommentComponent,
    UserPostsComponent,
    UserPostCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUsersComponent},
      {path: 'posts', component: AllPostsComponent},
      {path: 'users/:userId/posts', component: UserPostsComponent},
      {path: 'comments', component: AllCommentsComponent},
      {path: 'users/:userId/posts/:postId/comments', component: UserPostCommentsComponent},
      {path: 'posts/:postId/comments', component: UserPostCommentsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
