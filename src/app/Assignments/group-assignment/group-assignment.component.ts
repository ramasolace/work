import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-assignment',
  templateUrl: './group-assignment.component.html',
  styleUrls: ['./group-assignment.component.css']
})
export class GroupAssignmentComponent implements OnInit {
  asignments = ['assignment1', 'assignment2', 'assignment3',"assignment4", "assignment5"];
  tempateName = 'assignment1'
  constructor() { }

  ngOnInit(): void {
  }

}
