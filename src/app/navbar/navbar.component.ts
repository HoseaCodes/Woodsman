import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public name = "Hosea";
  public logSearch = "App start";

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(value: String) {
    console.log(value)
  }

  onSave() {
    console.log('Save')
  }

  onScroll() {
    console.log('Scroll')
  }

}
