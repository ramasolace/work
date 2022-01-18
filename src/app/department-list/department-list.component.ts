import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { COUNTRIES } from './department';
import { CountryService } from './department.service';
import { NgbdSortableHeader, SortEvent } from './sort.directive';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  countries

  constructor(public service: CountryService) { 
   this.countries = COUNTRIES;
  }

  ngOnInit(): void {
    this.service.storeDeapartment();
  }


}
