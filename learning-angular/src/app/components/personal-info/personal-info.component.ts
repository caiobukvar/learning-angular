import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  @Input() userData!: {
    name: string,
    frameworks: Array<{ name: string, level: string }>,
    linkedin: string,
    github: string,
  }

  @Input() hobbies!: Array<{
    id: number,
    name: string
  }>

  constructor() { }

  showAboutMe: boolean = false;
  showExperience: boolean = false;
  showFindMe: boolean = false;
  showHobbies: boolean = false;
  ngOnInit(): void { }


  openAboutMe(): void {
    this.showAboutMe = !this.showAboutMe;
    this.showExperience = false;
    this.showFindMe = false;
    this.showHobbies = false;
  }
  openExperience(): void {
    this.showAboutMe = false;
    this.showExperience = !this.showExperience;
    this.showFindMe = false;
    this.showHobbies = false;
  }
  openFindMe(): void {
    this.showAboutMe = false;
    this.showExperience = false;
    this.showFindMe = !this.showFindMe;
    this.showHobbies = false;
  }
  openHobbies(): void {
    this.showAboutMe = false;
    this.showExperience = false;
    this.showFindMe = false;
    this.showHobbies = !this.showHobbies;
  }

}
