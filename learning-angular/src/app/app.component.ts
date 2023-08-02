import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData = {
    name: 'Caio Bukvar',
    frameworks: [
      {
        name: 'React',
        experience: '2 anos'
      },
      {
        name: 'Angular',
        experience: 'Just started'
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
}
