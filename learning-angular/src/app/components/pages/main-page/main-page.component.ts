import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void { }


 
}
