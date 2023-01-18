import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
 authUrl: string = "https://localhost:7120/user";
  currentUser?: User | null;


  constructor(private http: HttpClient) { }

public logIn(email:string, password: string): Observable<any>{
  this.currentUser = new User();
  this.currentUser.userEmail = email;
  this.currentUser.userPass = password;

  const payload = this.currentUser;

  return this.http.post<any>(`${ this.authUrl }/login`, payload)
   
 

  
  };
   
}



