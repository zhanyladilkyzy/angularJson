import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  ngOnInit(): void {
  }

  userList: User[];

  constructor(public usersService: UsersService) {
    this.userList = [];
  }
  getUsers(){
    this.userList = this.usersService.getUsers();
  }
}
