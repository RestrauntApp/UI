import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviewUrl: string = "/api/review";

  constructor(private http: HttpClient) { }

public getRestAverage(resId: number): Observable<number>{

  return this.http.get<number>(this.reviewUrl+'/res/avg');
}

}
