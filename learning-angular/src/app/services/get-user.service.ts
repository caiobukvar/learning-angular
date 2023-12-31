import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GitHubUser } from '../GitHubUser';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  per_page: number = 10;
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `https://api.github.com/users`
  }

  getGithubUser(): Observable<GitHubUser[]> {
    const token = ''
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', `Bearer ${token}`);

    const searchUrl = `${this.apiUrl}${this.per_page !== 0 ? `?per_page=${this.per_page} ` : ''}`;

    return this.http.get<GitHubUser[]>(searchUrl)
  }

  getGithubUserByUsername(login: string): Observable<GitHubUser> {
    const token = '';
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', `Bearer ${token}`);

    const searchUrl = `${this.apiUrl}/${login}`;

    return this.http.get<GitHubUser>(searchUrl);
  }
}
