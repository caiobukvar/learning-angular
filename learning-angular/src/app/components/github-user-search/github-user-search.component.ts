import { Component, OnInit } from '@angular/core';
import { GitHubUsers } from 'src/app/GitHubUsers';
import { GetUserService } from 'src/app/services/get-user.service';

@Component({
  selector: 'app-github-user-search',
  templateUrl: './github-user-search.component.html',
  styleUrls: ['./github-user-search.component.css']
})
export class GithubUserSearchComponent implements OnInit {
  users: GitHubUsers[] = [
    { login: '', name: '', avatar_url: '' }
  ]

  constructor(private getUserService: GetUserService) {
    this.getUsers()
  }

  ngOnInit(): void { }

  getUsers(): void {
    console.log('entrei')

    this.getUserService.getGithubUser().subscribe((users) => (this.users = users))
  }
}