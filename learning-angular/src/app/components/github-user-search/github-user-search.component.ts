import { Component, OnInit } from '@angular/core';
import { GitHubUser } from 'src/app/GitHubUser';
import { GetUserService } from 'src/app/services/get-user.service';


@Component({
  selector: 'app-github-user-search',
  templateUrl: './github-user-search.component.html',
  styleUrls: ['./github-user-search.component.css']
})
export class GithubUserSearchComponent implements OnInit {
  users: GitHubUser[] = [];
  usernameToSearch = '';
  filteredUser: GitHubUser | null = null; // o nulo serve para indicar que não existe um user filtrado

  constructor(private getUserService: GetUserService) {
    this.getUsers();
  }

  ngOnInit(): void { }

  handleUsername(event: any): void {
    this.usernameToSearch = event.target.value;
  }

  getUsers(): void {
    this.getUserService.getGithubUser().subscribe((users) => (this.users = users));
  }

  getGithubUserByLogin(): void {
    if (this.usernameToSearch.trim() !== '') {
      this.getUserService.getGithubUserByUsername(this.usernameToSearch).subscribe((user) => {
        this.filteredUser = user ? user : null;
      });
    } else {
      this.filteredUser = null;
    }
  }
}
