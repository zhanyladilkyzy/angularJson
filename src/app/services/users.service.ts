import { Injectable } from '@angular/core';
import { User } from "../user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getUsers(){
    let userList:User[];
    userList = [
      new User(26084, "Adilkyzy Zhanyl"),
      new User(26085, "Adilkyzy Zhanyl"),
      new User(26086, "Adilkyzy Zhanyl"),
    ]
    return userList;

  }
  constructor() { }
}
