import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GitHubUsers } from '../GitHubUsers';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  page: number = 0;
  per_page: number = 10;
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `https://api.github.com/users${this.per_page !== 0 ? `?per_page=${this.per_page} ` : ''}${this.page !== 0 ? `?since=${this.page} ` : ''}`
  }

  getGithubUser(): Observable<GitHubUsers[]> {
    const token = ''
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', `Bearer ${token}`);

    return this.http.get<GitHubUsers[]>(this.apiUrl)
  }
}
