import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  constructor() { }

  form!: NgForm;
  ngOnInit(): void {

}
  onSubmit(form: NgForm) {
    console.log(this.form.value);
  }



}
