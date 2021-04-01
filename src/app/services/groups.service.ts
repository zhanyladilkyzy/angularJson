import { Injectable } from '@angular/core';
import {Group} from "../group";

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  getGroups(){
    let groupList:Group[];
    groupList = [
      new Group("IS-1805", 3),
      new Group("IS-1714", 2),
      new Group("IS-1405", 4),
    ]
    return groupList;

  }
  constructor() { }
}
