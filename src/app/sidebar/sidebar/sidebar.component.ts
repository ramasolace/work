import { Component,  HostBinding,  OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuList = [
    { path: 'emp-list', name: 'Employee List', icon:'codesandbox', active:false },
    { path: 'dep-list', name:'Department List', icon:'codepen', active:false },
    { path: 'assignment', name: 'Assignments', icon:'edit', active:false},
    { path: 'help',    name: 'Other', icon:'settings', active:false},
  ];

  constructor() { }
  @HostBinding('class.expanded') expanded: boolean = true;
  ngOnInit(): void {
  
  }

  setActive(menu){
    console.log(menu);
    this.menuList.forEach(res=>
      {
        res.active = (menu.name === res.name)?true: false;
      })
      console.log(this.menuList);
  }

}
