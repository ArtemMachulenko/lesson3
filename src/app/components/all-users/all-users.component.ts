import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/users/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: User[];

  constructor(private UserService: UserService) {
    this.UserService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  ngOnInit(): void {
  }

}
