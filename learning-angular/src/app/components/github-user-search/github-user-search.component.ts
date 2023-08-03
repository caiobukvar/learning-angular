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
    { login: '', url: '', avatar_url: '' }
  ]
  usernameToSearch = ''
  filteredUser: GitHubUsers[] = [
    { login: '', url: '', avatar_url: '' }
  ]



  constructor(private getUserService: GetUserService) {
    //aqui roda a função para carregar os dados do github automaticamente ao acessar a página /github-users
    this.getUsers()
  }

  ngOnInit(): void { }

  handleUsername(event: any): void {
    this.usernameToSearch = event.target.value;
  }

  getUsers(): void {
    this.getUserService.getGithubUser().subscribe((users) => this.users = users)
  }
  getGithubUserByLogin(): void {
    this.getUserService.getGithubUserByUsername(this.usernameToSearch).subscribe((users) => {
      this.filteredUser = users;
    })
  }

}
