import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  public isSideBarOpen:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggoler(){
    this.isSideBarOpen=!this.isSideBarOpen;
  }

}
