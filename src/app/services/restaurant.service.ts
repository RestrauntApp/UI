import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurantUrl: string = "https://localhost:7120"


  public getRestaurants(): Observable<Restaurant[]>{
    let endpoint = '/api/restaurant'
    return this.http.get<Restaurant[]>( this.restaurantUrl+endpoint);
       //.pipe(map((restaurants: Restaurant[]) => restaurants.map(restaurant => new Restaurant(restaurant.Id, restaurant.Name,restaurant.Type,restaurant.Culture,0))));
  }
  constructor(private http: HttpClient) { }
}
