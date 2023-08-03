import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GitHubUsers } from '../GitHubUsers';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  private apiUrl = 'https://api.github.com/users'
  constructor(private http: HttpClient) { }

  getGithubUser(): Observable<GitHubUsers[]> {
    const token = ''
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', `Bearer ${token}`);

    return this.http.get<GitHubUsers[]>(this.apiUrl)
  }
}
