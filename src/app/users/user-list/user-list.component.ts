import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user';
import { UserService } from '../../services/user.service'


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {
  // instantiate posts to an empty array
  users: any = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
