import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public isDarkMode = true;
  public showFiller = true;
  availableLinks: string[] = ['Live Tails', 'Sources', 'View', 'Alerts', 'Dashboards', 'Integrations', 'Help & Support'];

  constructor() { }

  ngOnInit(): void {
  }

  switchModes() {
    console.log('change css');
    this.isDarkMode = !this.isDarkMode;
  }

}
