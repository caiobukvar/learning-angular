import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userData = {
    name: 'Caio Bukvar',
    frameworks: [
      {
        name: 'React',
        level: 'Avançado'
      },
      {
        name: 'Angular',
        level: 'Iniciante'
      }
    ],
    linkedin: 'https://www.linkedin.com/in/caiobukvar/',
    github: 'https://github.com/caiobukvar'
  }

  hobbies = [
    {
      id: 1,
      name: 'Cozinhar'
    },
    {
      id: 2,
      name: 'Programar'
    },
    {
      id: 3,
      name: 'Jogar'
    },
    {
      id: 4,
      name: 'Conhecer restaurantes'
    },
  ]

  date = new Date();

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }

  getFormattedDate() {
    return this.datePipe.transform(this.date, 'fullDate', 'pt-br');
  }
}
