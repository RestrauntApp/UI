import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviewUrl: string = "https://localhost:7120";

  constructor(private http: HttpClient) { }

public getRestAverage(resId: number): Observable<number>{

  return this.http.get<number>(this.reviewUrl+'/Avg?restId='+resId);
}

//https://localhost:7120/Avg?restId=
}
