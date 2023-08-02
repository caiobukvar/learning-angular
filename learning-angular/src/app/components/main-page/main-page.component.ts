import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @Input() userData!: {
    name: string,
    frameworks: Array<{ name: string, experience: string }>,
    city: string,
    state: string
  }

  constructor() { }

  ngOnInit(): void { }
}
