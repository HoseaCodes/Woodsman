import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public isDarkMode = true;
  constructor() { }

  ngOnInit(): void {
  }

  switchModes() {
    console.log('change css');
    this.isDarkMode = !this.isDarkMode;
  }

}
