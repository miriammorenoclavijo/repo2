import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GmailService {

  constructor(private http: HttpClient, private login: LoginService) { }

  public getRecibidos = function () {
    const url = "https://www.googleapis.com/gmail/v1/users/"+this.login.userId+"/messages?";
    const authToken = this.login.tokenUser;
    let headers = new HttpHeaders({ Authorization: `Bearer ${authToken}`});
    return this.http.get(url, { headers } );
  };
}