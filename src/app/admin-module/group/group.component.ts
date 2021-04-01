import { Component, OnInit } from '@angular/core';
import {GroupsService} from "../../services/groups.service";
import {Group} from "../../group";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  ngOnInit(): void {
  }
  groupList: Group[];

  constructor(public groupsService: GroupsService) {
    this.groupList = [];
  }
  getGroups(){
    this.groupList = this.groupsService.getGroups();
  }
}
