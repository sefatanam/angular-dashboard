import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Output() toggleSideBarForMe: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBarMenu() {

    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resze')
      );
    }, 1000);
  }

}
