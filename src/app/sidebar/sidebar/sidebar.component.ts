import { Component,  HostBinding,  OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuList = [
    { path: 'assignment', name: 'Assignments', icon:'edit', active:false},
    { path: 'emp-list', name: 'Employee List', icon:'codesandbox', active:false },
    { path: 'dep-list', name:'Department List', icon:'codepen', active:false },
    { path: 'help',    name: 'Other', icon:'settings', active:false},
    { path: 'list-product',    name: 'shop', icon:'settings', active:false}
  ];
  defaultMneu={
    "path": "assignment",
    "name": "Assignments",
    "icon": "edit",
    "active": true
};
  constructor() { }
  @HostBinding('class.expanded') expanded: boolean = true;
  ngOnInit(): void {
    console.log('hey');
    this.setActive(this.defaultMneu)
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
