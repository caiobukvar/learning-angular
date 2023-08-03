import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Learning Angular'
  date = new Date();

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }

  getFormattedDate() {
    return this.datePipe.transform(this.date, 'fullDate', 'pt-br');
  }
}
