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
    linkedin: string,
    github: string,
  }

  @Input() hobbies!: Array<{
    id: number,
    name: string
  }>

  constructor() { }
  showAboutMe: boolean = false;
  showFindMe: boolean = false;
  showHobbies: boolean = false;

  ngOnInit(): void { }


  openAboutMe(): void {
    this.showAboutMe = !this.showAboutMe;
    this.showFindMe = false;
    this.showHobbies = false;
  }
  openFindMe(): void {
    this.showAboutMe = false;
    this.showFindMe = !this.showFindMe;
    this.showHobbies = false;
  }
  openHobbies(): void {
    this.showAboutMe = false;
    this.showFindMe = false;
    this.showHobbies = !this.showHobbies;
  }
}
