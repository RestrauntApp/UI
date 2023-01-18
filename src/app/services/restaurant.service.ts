import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurantUrl: string = "/api/restaurant"


  public getRestaurants(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(enviroment.baseUrl + this.restaurantUrl,{headers: env.headers});
  }
  constructor(private http: HttpClient) { }
}
