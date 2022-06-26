import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  public logs = [];

  constructor() { }

  ngOnInit(): void {
  }

  csvToArray(csv: any, delimiter = ",", omitFirstRow = false) {
    return csv.slice(omitFirstRow ? csv.indexOf('\n') + 1 : 0)
    .split("\n")
    .map((element: string) => element.split(delimiter))
  }


}
