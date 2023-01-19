import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurantUrl: string = "https://localhoast:7253"


  public getRestaurants(): Observable<Restaurant[]>{
    let endpoint = '/api/Restaurant'
    return this.http.get<Restaurant[]>( this.restaurantUrl+endpoint)
        .pipe(map((restaurants: Restaurant[]) => restaurants.map(restaurant => new Restaurant())));
  }
  constructor(private http: HttpClient) { }
}
