import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dateline',
  templateUrl: './dateline.component.html',
  styleUrls: ['./dateline.component.css']
})
export class DatelineComponent implements OnInit {

public myDate = new Date();
public daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
public monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];

public date = this.myDate.getDate();
public month = this.monthsList[this.myDate.getMonth()];
public year = this.myDate.getFullYear();
public day = this.daysList[this.myDate.getDay()];

public today = `${this.date} ${this.month} ${this.year}, ${this.day}`;

public amOrPm = 'PM';
// let twelveHours = function (){
//     if(myDate.getHours() > 12)
//     {
//         amOrPm = 'PM';
//         let twentyFourHourTime = myDate.getHours();
//         let conversion = twentyFourHourTime - 12;
//         return `${conversion}`

//     }else {
//         amOrPm = 'AM';
//         return `${myDate.getHours()}`}
// };
public hours = this.twelveHours();
public minutes = this.getMinutes();

public currentTime = `${this.hours}:${this.minutes} ${this.amOrPm}`;

public timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
public split = this.myDate.toString().split(" ");
public timezoneWord = this.split[this.split.length - 3]
public timeSplit = this.split[this.split.length - 4].split('-')[1];
public timezoneAbv =this.split[this.split.length - 4].split('-')[0] + ' ' + this.insert(this.timeSplit, 2, ":");


public dateTime = this.today + ' ' + this.currentTime + ' ' + this.timezoneAbv;

  constructor() { }

  ngOnInit(): void {
  }

  insert(str: string, index: number, value: any) {
    return str.substr(0, index) + value + str.substr(index);
  }

  getMinutes() {
    if(this.myDate.getMinutes() < 10) {
      return `${"0" + this.myDate.getMinutes()}`
    } else {
      return `${this.myDate.getMinutes()}`
    }
  }

  twelveHours() {
    if(this.myDate.getHours() > 12)
    {
        this.amOrPm = 'PM';
        let twentyFourHourTime = this.myDate.getHours();
        let conversion = twentyFourHourTime - 12;
        return `${conversion}`

    }else if(this.myDate.getHours() < 10) {
        this.amOrPm = 'AM';
        return `${'0' + this.myDate.getHours()}`
    } else {
      this.amOrPm = 'AM';
      return `${this.myDate.getHours()}`}
    }
}
