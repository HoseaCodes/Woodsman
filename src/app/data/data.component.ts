import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class DataComponent implements OnInit {

  // public logsData = 'http://localhost:4200/assests/output.csv';
  // public logsData = '/assests/output.csv';
  public logsData = 'http://dog-api.kinduff.com/api/facts';
  logs: any[] = [];
  // public logs = this.csvToArray("output.csv");
  // public logs = this.csvToArray("output.csv");
  public title = "Woodsman";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.getData();

    this.http.get('assets/output.csv', {responseType: 'text'})
    .subscribe(
        data => {
          this.logs = data.split('\n');
        },
        error => {
            console.log(error);
        }
    );
  }

  getData() {
    this.getInfo().subscribe(data => {
      const list = data.split('\n');
      list.forEach( e => {
        this.logs.push(e);
      })
    })
  }

  getInfo() {
    return this.http.get(this.logsData, {responseType: 'text'})
  }

  csvToArray(csv: any, delimiter = ",", omitFirstRow = false) {
    console.log(csv.map((ele: string) => console.log(ele)))
    console.log(csv.slice(omitFirstRow ? csv.indexOf('\n') + 1 : 0))
    return csv.slice(omitFirstRow ? csv.indexOf('\n') + 1 : 0)
    .split("\n")
    .map((element: string) => element.split(delimiter))
  }


}

