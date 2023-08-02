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
    city: 'Jundiaí',
    state: 'SP'
  }
}
